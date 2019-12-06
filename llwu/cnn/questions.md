# 理论题目

#### 1. Compared to FNN, what is the biggest advantage of CNN?

在对图片进行训练的时候，CNN发挥了其重要优势

FNN处理图片的时候，图片较大，将其展开后，参数较多，数据处理耗时，且想要得到好的结果，会加深FNN的深度，而且还容易导致过拟合，

CNN通过每一层共享一个filter和polling的操作，避免了以上问题，即CNN具有以下优势

- 训练参数少
- 网络层次少
- 合理优化后，不容易过拟合



#### 2. Suppose your input is a 100 by 100 gray image, and you use a convolutional layer with 50 filters that are each 5x5. How many parameters does this hidden layer have (including the bias parameters)? 

$$
n = 100
$$

$$
f = 5
$$

$$
n_c = 50
$$

$$
n_c*(f*f+1) = 50*26 = 1300
$$

一共有1300个参数



#### 3. What are "local invariant" and "parameter sharing" ?

- local invariant(平移不变性)

  把一幅图像或一个空间中的每一个点在相同方向移动相同距离。比如对图像分类任务来说，图像中的目标不管被移动到图片的哪个位置，得到的结果（标签）应该是相同的，这就是卷积神经网络中的平移不变性。

  不管它的输入是如何平移的 ，平移不变性意味着系统产生完全相同的输出

- parameter sharing

  在同一个层次，在做特征提取的时候，每个位置的特征提取，都是共享的一个filter

  

#### 4. Why we use batch normalization ?

神经网络在学习的目的是拟合输出的概率分布，而在学习的过程中，每一层都会使得概率分布改变，从而降低学习能力，所以为了保证每一层次的分布都是类似的，从而使用batch normalization



#### 5. What problem does dropout try to solve ?

过拟合



#### 6.  Is the following statement correct and why ? "Because pooling layers do not have parameters, they do not affect  the backpropagation(derivatives) calculation"

错误的

 pooling layers 的优势是：可以在不需要参数的情况下，即保证了图像特征，又降低了维度，还防止了过拟合

![image-20191124182615316](/Users/llwu/Library/Application Support/typora-user-images/image-20191124182615316.png)

