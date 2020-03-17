### What does a neuron compute?

$$
z = w^T x + b
$$

$$
y = σ(z)
$$

（1）线性计算：每个输入x乘上其对应的权重w并加上偏差b得到中间结果z，

（2）应用激活函数：对中间结果进行使用激活函数σ进行计算，得到该神经元额输出

### Why we use non-linear activation funcitons in neural networks?

根据神经元中计算原理可知，如果激活函数是线性的，那么相当于对z进行了缩放，即对权重w和偏差进行了缩放，神经网络层数越多，输出的结果永远都是一个线性组合输出。

而使用非线性激励函数，随着神经网络层数增加，这个网络更加接近一个任意的函数

### What is the 'Logistic Loss' ?

逻辑回归的损失函数
$$
L=MSE=sigm(y_i-y)
$$


###  Assume that you are building a binary classifier for detecting if an image containing cats, which activation functions would you recommen using for the output layer ?

A. ReLU    
B. Leaky ReLU    
**C. sigmoid**    
D. tanh  

### Why we don't use zero initialization for all parameters ?



why max max

导数定值，迭代速度快

不容易出现瓶颈，不容易出现迭代不动的情况，

### Can you implement the softmax function using python ?

