#------------------#
import bs4,requests,urllib,time,threading
#------------------#

class MultiThreadDownload(threading.Thread):
    '''The Class for Multi-Thread Download'''
    '''Get from Internet and improved by Ghink Network Studio'''
    def __init__(self,url,startpos,endpos,f,UA):
        super(MultiThreadDownload,self).__init__()
        self.url=url
        self.startpos=startpos
        self.endpos=endpos
        self.fd=f
        self.UA=UA
    def download(self):
        headers=self.UA.update({"Range":"bytes=%s-%s"%(self.startpos,self.endpos)})
        res=requests.get(self.url,headers=headers)
        self.fd.seek(self.startpos)
        self.fd.write(res.content)
    def run(self):
        self.download()

class GOSManager(object):
    '''The Main Class of the Sync Manager'''
    def __init__(self,SiteName="GOSManager",SiteVersion="A0.0.1"):
        '''The global variable set function'''
        self.__SiteName=SiteName
        self.__SiteVersion=SiteVersion
        self.__UserAgent={'User-Agent':SiteName+'/'+SiteVersion+' ((GOSM Manager Alpha 0.0.1;Alpha))'}
    def Download(self,DownloadFrom,DownloadTo,ThreadNum=3):
        '''Multi-Thread download function'''
        if(DownloadFrom=="" or DownloadTo==""):
            return "Error:Wrong online address or local address for download."
        else:
            url = DownloadFrom
            filename = DownloadTo
            filesize = int(requests.head(url,headers=self.__UserAgent).headers['Content-Length'])
            threadnum = ThreadNum
            threading.BoundedSemaphore(threadnum)
            step = filesize // threadnum
            mtd_list = []
            start = 0
            end = -1
            tempf = open(filename,'w')
            tempf.close()
            with open(filename,'rb+') as  f:
                fileno = f.fileno()
                while end < filesize -1:
                    start = end +1
                    end = start + step -1
                    if end > filesize:
                        end = filesize
                    dup = os.dup(fileno)
                    fd = os.fdopen(dup,'rb+',-1)
                    t = MultiThreadDownload(url,start,end,fd,self.__UserAgent)
                    t.start()
                    mtd_list.append(t)
                for i in mtd_list:
                    i.join()
    def GetHttpSyncList(self,url,domain=""):
        '''The function which used to get http links list of files were need to sync'''
        if(domain==""):
            domain=urllib.parse.urlparse(url).netloc
        List=[]
        #Determine the type of online file,only try to search link in html file
        if("text/html" in requests.head(url).headers['Content-Type']):
            html=requests.get(url)
            html.encoding='utf-8'
            soup=bs4.BeautifulSoup(html.text,"html.parser")
            #Get all links from the page
            for h in soup.find_all('a'):
                try:
                    if(h['href']=="../" or "#" in h['href']):
                        pass
                    else:
                        #Check the link format,make sure it start with "http://" or "https://"
                        if("http://" in h['href'] or "https://" in h['href']):
                            urlGet=h['href']
                        else:
                            urlGet=url+h['href']
                        #Avoid outside link
                        if(domain in urlGet):
                            #Recursion to get all links
                            List.extend(HttpSync(urlGet,domain))
                            #Avoid record any links link to dirs
                            if("text/html" not in requests.head(urlGet).headers['Content-Type']):
                                List.append(urlGet)
                except:
                    pass
        #Duplicate removal
        ListReturn=[]
        for i in List:
            if(i not in ListReturn):
                ListReturn.append(i)
        return ListReturn

