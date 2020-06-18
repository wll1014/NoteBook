# zoomkeepr集群搭建

`docker network create --driver bridge --subnet 172.22.1.0/24 --gateway 172.22.1.1 br17219`

因为一个一个地启动 ZK 太麻烦了, 所以为了方便起见, 我直接使用 docker-compose 来启动 ZK 集群.
首先创建一个名为 **docker-compose.yml** 的文件, 其内容如下:

```json
version: '3.7'

networks:
  zookeeper_network:
    external: true


services:
  zoo1:
    image: zookeeper
    restart: always
    hostname: zoo1
    container_name: zoo1
    ports:
      - 2182:2181
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=0.0.0.0:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
    volumes:
      - "/Users/wulinli/Development/volume/zkcluster/zoo1/data:/data"
      - "/Users/wulinli/Development/volume/zkcluster/zoo1/datalog:/datalog"
    networks:
      - zookeeper_network

  zoo2:
    image: zookeeper
    restart: always
    hostname: zoo2
    container_name: zoo2
    ports:
      - 2183:2181
    environment:
      ZOO_MY_ID: 2
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=0.0.0.0:2888:3888;2181 server.3=zoo3:2888:3888;2181
    volumes:
      - "/Users/wulinli/Development/volume/zkcluster/zoo2/data:/data"
      - "/Users/wulinli/Development/volume/zkcluster/zoo2/datalog:/datalog"
    networks:
      - zookeeper_network

  zoo3:
    image: zookeeper
    restart: always
    hostname: zoo3
    container_name: zoo3
    ports:
      - 2184:2181
    environment:
      ZOO_MY_ID: 3
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=0.0.0.0:2888:3888;2181
    volumes:
      - "/Users/wulinli/Development/volume/zkcluster/zoo3/data:/data"
      - "/Users/wulinli/Development/volume/zkcluster/zoo3/datalog:/datalog"
    networks:
      - zookeeper_network
```

创建zoomkeeper

`docker-compose up -d` 



![企业微信截图_12cf66b4-5ac9-41d4-ad9c-8c87fc4224c7](/Users/wulinli/Library/Containers/com.tencent.WeWorkMac/Data/Library/Application Support/WXWork/Temp/ScreenCapture/企业微信截图_12cf66b4-5ac9-41d4-ad9c-8c87fc4224c7.png)

![企业微信截图_a2888b28-bf45-4c6b-abed-e602d87e13d9](/Users/wulinli/Library/Containers/com.tencent.WeWorkMac/Data/Library/Application Support/WXWork/Temp/ScreenCapture/企业微信截图_a2888b28-bf45-4c6b-abed-e602d87e13d9.png)



查看容器状态

`docker exec -it zoo1 bash ./bin/zkServer.sh status`



注意事项：
docker network create --driver bridge --subnet 172.22.1.0/24 --gateway 172.22.1.1 br17219

