1.下载kafka，网址：

http://kafka.apache.org/downloads    [kafka_2.13-2.5.0.tgz](https://www.apache.org/dyn/closer.cgi?path=/kafka/2.5.0/kafka_2.13-2.5.0.tgz)

2.然后解压[kafka_2.13-2.5.0.tgz](https://www.apache.org/dyn/closer.cgi?path=/kafka/2.5.0/kafka_2.13-2.5.0.tgz)

3.启动

　　1）启动kafka前需要先启动zookeeper，这里使用默认配置，直接启动Kafka自带的zookeeper

　　cd 到Kafka目录，运行命令：

​	`./bin/zookeeper-server-start.sh ./config/zookeeper.properties &`

　　zookeeper.properties 是zookeeper的配置文件 ,主要是简单配置下面的三个参数（这部分具体介绍请看zookeeper内容）：

　　dataDir=/tmp/zookeeper。--

　　clientPort=2181  --zookeeper端口

　　maxClientCnxns=0

　　下图表示zookeeper启动成功，端口2181：

![企业微信截图_6e57f061-2ca7-4c05-9dab-ef201573ee85](/Users/wulinli/Library/Containers/com.tencent.WeWorkMac/Data/Library/Application Support/WXWork/Temp/ScreenCapture/企业微信截图_6e57f061-2ca7-4c05-9dab-ef201573ee85.png)

　　如果报 java.net.BindException: Address already in use的异常，那说明2181端口被占用，运行命令，找出占用的进程：sudo lsof -i:2181；杀掉进程：kill -9 pid

　　然后再运行zookeeper启动命令就可以了

　　2） 使用默认配置，单机模式启动kafka

　　./bin/kafka-server-start.sh ./config/server.properties &

　　下图表示kafka单机模式启动成功，端口为9092：

![企业微信截图_9262a4b9-7020-488f-abf4-fabe074043c6](/Users/wulinli/Library/Containers/com.tencent.WeWorkMac/Data/Library/Application Support/WXWork/Temp/ScreenCapture/企业微信截图_9262a4b9-7020-488f-abf4-fabe074043c6.png)