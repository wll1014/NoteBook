# topic创建及分区修改

./kafka-topics.sh --zookeeper localhost:2182,localhost:2183,localhost:2184 --**create** --replication-factor 1 -partitions 1 --topic test3



./kafka-topics.sh --**describe** --zookeeper localhost:2182,localhost:2183,localhost:2184 --topic test3  



./kafka-topics.sh --**alter** --zookeeper localhost:2182,localhost:2183,localhost:2184 --topic test3 --partitions 3  



 ./kafka-topics.sh --zookeeper localhost:2182,localhost:2183,localhost:2184 --create --replication-factor 2 -partitions 2 --topic test4





# 