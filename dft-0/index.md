# 0 开始


## 引言

集成电路（IC，通常称为微芯片或芯片）问世后，就有了对其进行测试的需求。20 世纪 60 年代初的小规模集成（SSI）器件只有数十个晶体管，60 年代末的中规模集成（MSI）器件有数百个晶体管，它们测试起来相对简单。然而，70 年代出现的大规模集成（LSI）器件有数千甚至数万个晶体管，测试时带来了诸多挑战。80 年代初出现了具有数十万个晶体管的超大规模集成（VLSI）器件，VLSI 技术的稳步发展使器件拥有数亿个晶体管，也带来许多新的测试挑战。

因此对大规模集成电路的测试技术也越来越重要，最近很需要系统的学习一下相应的知识。《VLSI Test Principles and Architectures》是一本权威且系统的介绍DFT知识的书籍，不过比较长而且也没有发现很好的中文笔记，所以想开个坑记录一下，废话不多说，直接开始！

## 缩写

{{< admonition tip "技巧" true >}}
把出现的缩写总结如下，持续更新！
{{< /admonition >}}

| Abbr. | Meaning                    |
| ----- | -------------------------- |
| CUT   | circuit under test         |
| FMA   | failure mode analysis      |
| PPM   | parts per million          |
| MTBF  | mean time between failures |
| MTTR  | mean time to repair        |


