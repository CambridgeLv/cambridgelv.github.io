# 1 Introduction


## 1.1 IMPORTANCE OF TESTING  

主要就是讲随着芯片器件数量的增多，测试就越来越重要。一个很小的缺陷就可能导致功能或芯片的失效。这里提到了一个**rule of ten**，该法则指出，从器件级到板级、再到系统级，直至现场系统运行，随着制造阶段的推进，检测出故障集成电路的成本会呈数量级增加。

## 1.2 TESTING DURING THE VLSI LIFECYCLE

测试通常包括向被测电路（CUT）的输入端施加一组测试激励，同时分析输出响应，如图 1.1 所示。对于所有输入激励都能产生正确输出响应的电路通过测试，被认为是无故障的。在测试序列期间任何时刻未能产生正确响应的电路则被认为是有故障的。超大规模集成电路（VLSI）器件生命周期的各个阶段都要进行测试，包括在 VLSI 开发过程、电子系统制造过程中，某些情况下还包括系统级运行阶段。

![Figure 1.1](/images/vlsi_test_principles_and_architectures/1.1.png "Figure 1.1")

### 1.2.1 VLSI Development Process

超大规模集成电路（VLSI）开发过程如图 1.2 所示，可以看到在该过程的每个阶段都涉及某种形式的测试。基于客户或项目需求，确定 VLSI 器件要求并将其制定为设计规范。

一旦经过验证，VLSI 设计就进入制造阶段。与此同时，测试工程师根据设计规范和与实现技术相关的故障模型制定测试程序。缺陷是可能导致故障的瑕疵或物理缺陷。由于用于制造集成电路的材料和掩模不可避免地存在统计缺陷，任何一种特定的集成电路都不可能 100% 无缺陷。因此，制造过程中进行的第一项测试是对晶圆上制造的集成电路进行测试，以确定哪些器件有缺陷。通过晶圆级测试的芯片被提取并封装。对封装后的器件进行重新测试，以剔除那些在封装过程中可能受损或装入有缺陷封装的器件。还会进行额外测试以确保上市前的最终质量。这种最终测试包括对输入 / 输出时序规范、电压和电流等参数的测量。此外，通常还会进行老化或压力测试，使芯片处于高温和电源电压环境下。老化测试的目的是加速可能导致集成电路在运行早期出现故障的缺陷的影响。故障模式分析（FMA）通常用于集成电路制造测试的各个阶段，以确定对工艺流程的改进措施，从而增加无缺陷器件的生产数量。

![Figure 1.2](/images/vlsi_test_principles_and_architectures/1.2.png "Figure 1.2")

#### 1.2.1.1 Design Verification

讲了设计的各个层次

![Figure 1.3](/images/vlsi_test_principles_and_architectures/1.3.png "Figure 1.3")

#### 1.2.1.2 Yield and Reject Rate

$$Yield = \frac{Number \enspace of \enspace acceptable \enspace parts}{Total \enspace number \enspace of \enspace parts \enspace fabricated}$$

当IC测试时可能有两种情况：

- 有问题的器件通过了测试
- 正常的器件没通过测试

第一种情况是不太能接受的，所以要考虑下面的指标：

$$Reject \enspace rate = \frac{Number \enspace of \enspace faulty \enspace parts \enspace passing \enspace final \enspace test}{Total \enspace number \enspace of \enspace parts \enspace passing \enspace final \enspace test}$$

一般**reject rate**低于500PPM是可以接受的，低于100PPM是高质量的，如果以**6 Sigma**为目标需要低于3.4PPM。

### 1.2.2 Electronic System Manufacturing Process

还是再讲每一步都要测试。

![Figure 1.4](/images/vlsi_test_principles_and_architectures/1.4.png "Figure 1.4")

### 1.2.3 System-Level Operation

这一节是在讲生产之后时间长度上的失效，比如可能由金属老化，EM等导致的失效。比如下图0代表正常，1代表失效。

![Figure 1.5](/images/vlsi_test_principles_and_architectures/1.5.png "Figure 1.5")

对于 t<sub>0</sub>- t<sub>1</sub>和 t<sub>2</sub>- t<sub>3</sub>我们叫做正常工作时间（T<sub>n</sub>)是服从指数分布的，也叫做**exponential failure law**。于是一个系统可以正常工作超过时间t的可能性，叫做可靠性（**reliability**）：

$$P(T_n>t)=e^{- \lambda t}$$

其中$\lambda$叫失效率（faliure rate）。因为一个系统是由很多器件组成的，所以应该累加一下：

$$\lambda = \sum_{i=0}^{k}{\lambda _i}$$

MTBF为：

$$MTBF=\int_{0}^\infty e^{- \lambda t}dt=\frac{1}{\lambda}$$

同样的， t<sub>1</sub>- t<sub>2</sub>和 t<sub>3</sub>- t<sub>4</sub>叫修复时间**R**，也服从指数分布

$$P(R>t)=e^{- \mu t}$$

其中$\mu$是修复率（repair rate）。于是MTTR为：

$$MTTR=\frac{1}{\mu}$$

于是我们这样定义系统可用性**system availability**：

$$system \enspace availability=\frac{MTBF}{MTBF+MTTR}$$

这个公式很常用，比如电话系统要达到0.9999。所以我们需要测试来保证系统可用性，包括在线测试**online testing**或离线测试**offline testing**或是两者的结合。在之后也可以确定到底是啥坏了以进行更换维修。

## 1.3 CHALLENGES IN VLSI TESTING

芯片越来越复杂了，所以测试很有挑战。

### 1.3.1 Test Generation


