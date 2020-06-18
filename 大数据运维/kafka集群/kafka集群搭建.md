首先创建一个名为 **docker-compose.yml** 的文件, 其内容如下：

```python
version: '3.7'

networks:
  zookeeper_network:
    external: true

services:

  kafka1:
    image: wurstmeister/kafka
    restart: always
    container_name: kafka1
    ports:
      - "9093:9092"
    external_links:
      - zoo1
      - zoo2
      - zoo3
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ADVERTISED_HOST_NAME: 10.67.12.101                   ## 修改:宿主机IP
      KAFKA_ADVERTISED_PORT: 9093                                 ## 修改:宿主机映射port
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://10.67.12.101:9093    ## 绑定发布订阅的端口。修改:宿主机IP
      KAFKA_ZOOKEEPER_CONNECT: "zoo1:2181,zoo2:2181,zoo3:2181"
    volumes:
      - /Users/wulinli/Development/volume/kfkluster/kafka1/logs:/kafka
    networks:
      - zookeeper_network


  kafka2:
    image: wurstmeister/kafka
    restart: always
    container_name: kafka2
    ports:
      - "9094:9092"
    external_links:
      - zoo1
      - zoo2
      - zoo3
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_ADVERTISED_HOST_NAME: 10.67.12.101                 ## 修改:宿主机IP
      KAFKA_ADVERTISED_PORT: 9094                               ## 修改:宿主机映射port
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://10.67.12.101:9094   ## 修改:宿主机IP
      KAFKA_ZOOKEEPER_CONNECT: "zoo1:2181,zoo2:2181,zoo3:2181"
    volumes:
      - /Users/wulinli/Development/volume/kfkluster/kafka2/logs:/kafka
    networks:
      - zookeeper_network

  kafka3:
    image: wurstmeister/kafka
    restart: always
    container_name: kafka3
    ports:
      - "9095:9092"
    external_links:
      - zoo1
      - zoo2
      - zoo3
    environment:
      KAFKA_BROKER_ID: 3
      KAFKA_ADVERTISED_HOST_NAME: 10.67.12.101                 ## 修改:宿主机IP
      KAFKA_ADVERTISED_PORT: 9095                              ## 修改:宿主机映射port
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://10.67.12.101:9095   ## 修改:宿主机IP
      KAFKA_ZOOKEEPER_CONNECT: "zoo1:2181,zoo2:2181,zoo3:2181"
    volumes:
      - /Users/wulinli/Development/volume/kfkluster/kafka3/logs:/kafka
    networks:
      - zookeeper_network

  kafka-manager:
    image: sheepkiller/kafka-manager:latest
    restart: always
    container_name: kafka-manager
    hostname: kafka-manager
    ports:
      - "9000:9000"
    links:            # 连接本compose文件创建的container
      - kafka1
      - kafka2
      - kafka3
    external_links:   # 连接本compose文件以外的container
      - zoo1
      - zoo2
      - zoo3
    environment:
      ZK_HOSTS: zoo1:2181,zoo2:2181,zoo3:2181                 ## 修改:宿主机IP
      TZ: CST-8
    networks:
      - zookeeper_network
```

创建kafka集群

`docker-compose up -d` 