# CNN

## 前情回顾

### 减少overfittting的两种方式

- dropout

- regrdabation

- [Batch Normalization](https://www.sohu.com/a/250702875_129720)

  

## 卷积神经网络

参考：深度学习第九章

​		speach and natural language processing

### 无卷积神经网络识别图片



全连接神经网络处理 图片的时候，图片较大，将其展开后，参数较多，除了数据处理耗时之外，还容易导致过拟合

### CNNs (parameters sharing)  



#### 什么是卷积

[卷积概念]( https://www.cnblogs.com/alexanderkun/p/8149059.html )

#### 卷积神经网络的计算过程



假设一个图片的是黑白色的，其数据如下：

![图片数据](E:\NoteBook\llwu\cnn\图片数据.png)

假设卷积矩阵（filter）如下（一般选择奇数的矩阵）：

![卷积层Filter](E:\NoteBook\llwu\cnn\卷积层Filter.png)

卷积神经网络是如何通过filter卷积计算的？计算过程如下：

![卷积流程](E:\NoteBook\llwu\cnn\卷积流程.png)

假设图片矩阵的size:
$$
n*n 
$$
 filter的size：


$$
f*f
$$
那么，卷积结果的size：
$$
( n - f +1 )*( n - f +1 )
$$

###  CNNs (Local invariant)  

卷积的平移不变性

即 一个图片  随意移动至任何地方都是能识别出来的

因为是参数共享？

[平移不变性]( https://www.cnblogs.com/Terrypython/p/11147490.html )

#### 不变性

不变性意味着即使目标的外观发生了某种变化，但是你依然可以把它识别出来。

这对图像分类来说是一种很好的特性，因为我们希望图像中目标无论是被平移，被旋转，还是被缩放，甚至是不同的光照条件、视角，都可以被成功地识别出来。

所以上面的描述就对应着各种不变性：

- 平移不变性：Translation Invariance
- 旋转/视角不变性：Ratation/Viewpoint Invariance
- 尺度不变性：Size Invariance
- 光照不变性：Illumination Invariance

#### 平移不变性/平移同变性

在欧几里得几何中，平移是一种几何变换，表示把一幅图像或一个空间中的每一个点在相同方向移动相同距离。比如对图像分类任务来说，图像中的目标不管被移动到图片的哪个位置，得到的结果（标签）应该是相同的，这就是卷积神经网络中的平移不变性。

平移不变性意味着系统产生完全相同的响应（输出），不管它的输入是如何平移的 。

平移同变性（translation equivariance）意味着系统在不同位置的工作原理相同，但它的响应随着目标位置的变化而变化 。比如，实例分割任务，就需要平移同变性，目标如果被平移了，那么输出的实例掩码也应该相应地变化。

最近看的FCIS这篇文章中提到，一个像素在某一个实例中可能是前景，但是在相邻的一个实例中可能就是背景了，也就是说，同一个像素在不同的相对位置，具有不同的语义，对应着不同的响应，这说的也是平移同变性。

####  为什么卷积神经网络具有平移不变性

简单地说，卷积+最大池化约等于平移不变性。

**卷积**：简单地说，图像经过平移，相应的特征图上的表达也是平移的。

下图只是一个为了说明这个问题的例子。输入图像的左下角有一个人脸，经过卷积，人脸的特征（眼睛，鼻子）也位于特征图的左下角。

![img](https://img2018.cnblogs.com/blog/1414369/201907/1414369-20190707200820644-1208964511.png)

假如人脸特征在图像的左上角，那么卷积后对应的特征也在特征图的左上角。

![img](https://img2018.cnblogs.com/blog/1414369/201907/1414369-20190707200927689-652038226.png)

在神经网络中，卷积被定义为不同位置的特征检测器，也就意味着，无论目标出现在图像中的哪个位置，它都会检测到同样的这些特征，输出同样的响应。比如人脸被移动到了图像左下角，卷积核直到移动到左下角的位置才会检测到它的特征。

**池化**：比如最大池化，它返回感受野中的最大值，如果最大值被移动了，但是仍然在这个感受野中，那么池化层也仍然会输出相同的最大值。这就有点平移不变的意思了。

所以这两种操作共同提供了一些平移不变性，即使图像被平移，卷积保证仍然能检测到它的特征，池化则尽可能地保持一致的表达。



### 特征检测

为什么cnn可以检测图片特征

设原始图片如下，检测该图片是否存在中间的竖线

![feature_detection_source](E:\NoteBook\llwu\cnn\feature_detection_source.png)

卷积filter如下

![feature_detection_filter](E:\NoteBook\llwu\cnn\feature_detection_filter.png)

检测结果如下

![feature_detection_result](E:\NoteBook\llwu\cnn\feature_detection_result.png)

### 卷积操作中偶尔会用到的操作

####  more about cnns padding1

![padding1](E:\NoteBook\llwu\cnn\padding1.png)

如果想卷积后尺寸和卷积前尺寸一致，那么
$$
n+2p-f+1 = n
$$

$$
2p = f-1
$$

$$
p = (f-1)/2
$$

为什么要用padding

- 保持卷积后的尺寸

- 不加padding，那么边缘数值，在每一层，边缘数值卷积的次数没有中间数值卷积次数多，如果一些特征存在在边缘，容易被忽略，而增加了padding后，可保证边缘数值的卷积次数，增加了边缘特征识别的效果。

  



#### more about cnns padding2

##### valid padding

没有padding，只做正常的卷积



##### same padding

保持前后维度一致
$$
n+2p-f+1 = n
$$

$$
2p = f-1
$$

$$
f = (f-1)/2
$$

这里就可以看出来为什么f需要奇数

#### more about cnns strides

正常卷积的时候，strides是为1的；即step=1即上下左右都是1

![cnn_strides3](E:\NoteBook\llwu\cnn\cnn_strides3.png)

所以如果数据量比较大的时候，加速计算尺寸收缩，可以，设置stride

- valide padding

$$
n-f+1/s
$$



- same padding
  $$
  n+2p-f+1/s
  $$
  



#### receotive field （感受野）

原始图片用来计算当前点的像素数目

![感受野](E:\NoteBook\llwu\cnn\感受野.png)

[感受野详细]( https://blog.csdn.net/program_developer/article/details/80958716 )



### 卷积层-池-pooling layer

一般有两种操作

- maxpool

![max_pool](E:\NoteBook\llwu\cnn\max_pool.png)

- average pool

![average_pool](E:\NoteBook\llwu\cnn\average_pool.png)

好处： 无需参数却能够降低维度

#### more about cnns feature maps

![feature_map](E:\NoteBook\llwu\cnn\feature_map.png)

### 训练方法

## 著名的神经网络模型

### LetNet

### AlexNet

### GoogleNet

### VGG，ResNet

### DeseNet

## 编码

### keras

### TF2.0







