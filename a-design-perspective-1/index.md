# A Design Perspective 1


## 1 开坑

一直以来想对工作上的内容有更好的归纳总结，另外本人也还没有从头到尾仔细读过数字电路设计中最经典的教材之一，由Jan M. Rabaey等人所著的《Digital Integrated Circuits A Design Perspective》，因此决定一边读一边记记笔记，也记录下结合这几年工作经验的思考。除了会引用原书外，该系列文章还会引用该书的译本，由周润德等人译制的《数字集成电路——电路、系统与设计》，之后对这2本书的引用不会再特别注明。

## 2 目录

关于本书的目录我先放在这里，大致也会按照这个顺序一点点更新：

PART I. THE FOUNDATIONS  
&ensp;&ensp;CHAPTER 1: INTRODUCTION  
&ensp;&ensp;&ensp;&ensp;1.1 A Historical Perspective  
&ensp;&ensp;&ensp;&ensp;1.2 Issues in Digital Integrated Circuit Design  
&ensp;&ensp;&ensp;&ensp;1.3 Quality Metrics of a Digital Design  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.3.1 Cost of an Integrated Circuit  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.3.2 Functionality and Robustness  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.3.3 Performance  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1.3.4 Power and Energy Consumption  
&ensp;&ensp;&ensp;&ensp;1.4 Summary  
&ensp;&ensp;&ensp;&ensp;1.5 To Probe Further  
&ensp;&ensp;Chapter 2: THE MANUFACTURING PROCESS  
&ensp;&ensp;&ensp;&ensp;2.1 Introduction  
&ensp;&ensp;&ensp;&ensp;2.2 Manufacturing CMOS Integrated Circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.2.1 The Silicon Wafer  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.2.2 Photolithography  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.2.3 Some Recurring Process Steps  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.2.4 Simplified CMOS Process Flow  
&ensp;&ensp;&ensp;&ensp;2.3 Design Rules — The Contract between Designer and Process Engineer  
&ensp;&ensp;&ensp;&ensp;2.4 Packaging Integrated Circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.4.1 Package Materials  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.4.2 Interconnect Levels  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.4.3 Thermal Considerations in Packaging  
&ensp;&ensp;&ensp;&ensp;2.5 Perspective — Trends in Process Technology  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.5.1 Short-Term Developments  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2.5.2 In the Longer Term  
&ensp;&ensp;&ensp;&ensp;2.6 Summary  
&ensp;&ensp;&ensp;&ensp;2.7 To Probe Further  
&ensp;&ensp;DESIGN METHODOLOGY INSERT A: IC LAYOUT  
&ensp;&ensp;CHPATER 3: THE DEVICES  
&ensp;&ensp;&ensp;&ensp;3.1 Introduction  
&ensp;&ensp;&ensp;&ensp;3.2 The Diode  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.2.1 A First Glance at the Diode — The Depletion Region  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.2.2 Static Behavior  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.2.3 Dynamic, or Transient, Behavior  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.2.4 The Actual Diode—Secondary Effects  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.2.5 The SPICE Diode Model  
&ensp;&ensp;&ensp;&ensp;3.3 The MOS(FET) Transistor  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.3.1 A First Glance at the Device  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.3.2 The MOS Transistor under Static Conditions  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.3.3 Dynamic Behavior  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.3.4 The Actual MOS Transistor—Some Secondary Effects  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3.3.5 SPICE Models for the MOS Transistor  
&ensp;&ensp;&ensp;&ensp;3.4 A Word on Process Variations  
&ensp;&ensp;&ensp;&ensp;3.5 Perspective: Technology Scaling  
&ensp;&ensp;&ensp;&ensp;3.6 Summary  
&ensp;&ensp;&ensp;&ensp;3.7 To Probe Further  
&ensp;&ensp;DESIGN METHODOLOGY INSERT B: CIRCUIT SIMULATION  
&ensp;&ensp;CHAPTER 4: THE WIRE  
&ensp;&ensp;&ensp;&ensp;4.1 Introduction  
&ensp;&ensp;&ensp;&ensp;4.2 A First Glance  
&ensp;&ensp;&ensp;&ensp;4.3 Interconnect Parameters — Capacitance, Resistance, and Inductance  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.3.1 Capacitance  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.3.2 Resistance  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.3.3 Inductance  
&ensp;&ensp;&ensp;&ensp;4.4 Electrical Wire Models  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.4.1 The Ideal Wire  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.4.2 The Lumped Model  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.4.3 The Lumped RC model  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.4.4 The Distributed rc Line  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.4.5 The Transmission Line  
&ensp;&ensp;&ensp;&ensp;4.5 SPICE Wire Models  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.5.1 Distributed rc Lines in SPICE  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;4.5.2 Transmission Line Models in SPICE  
&ensp;&ensp;&ensp;&ensp;4.6 Perspective: A Look into the Future  
&ensp;&ensp;&ensp;&ensp;4.7 Summary  
&ensp;&ensp;&ensp;&ensp;4.8 To Probe Further PART II. A CIRCUIT PERSPECTIVE  
&ensp;&ensp;Chapter 5: THE CMOS INVERTER  
&ensp;&ensp;&ensp;&ensp;5.1 Introduction  
&ensp;&ensp;&ensp;&ensp;5.2 The Static CMOS Inverter — An Intuitive Perspective  
&ensp;&ensp;&ensp;&ensp;5.3 Evaluating the Robustness of the CMOS Inverter: The Static Behavior  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.3.1 Switching Threshold  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.3.2 Noise Margins  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.3.3 Robustness Revisited  
&ensp;&ensp;&ensp;&ensp;5.4 Performance of CMOS Inverter: The Dynamic Behavior  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.4.1 Computing the Capacitances  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.4.2 Propagation Delay: First-Order Analysis  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.4.3 Propagation Delay from a Design Perspective  
&ensp;&ensp;&ensp;&ensp;5.5 Power, Energy, and Energy-Delay  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.5.1 Dynamic Power Consumption  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.5.2 Static Consumption  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.5.3 Putting It All Together  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;5.5.4 Analyzing Power Consumption Using SPICE  
&ensp;&ensp;&ensp;&ensp;5.6 Perspective: Technology Scaling and its Impact on the Inverter Metrics  
&ensp;&ensp;&ensp;&ensp;5.7 Summary  
&ensp;&ensp;&ensp;&ensp;5.8 To Probe Further  
&ensp;&ensp;CHAPTER 6: DESIGNING COMBINATIONAL LOGIC GATES IN CMOS  
&ensp;&ensp;&ensp;&ensp;6.1 Introduction  
&ensp;&ensp;&ensp;&ensp;6.2 Static CMOS Design  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.2.1 Complementary CMOS  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.2.2 Ratioed Logic  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.2.3 Pass-Transistor Logic  
&ensp;&ensp;&ensp;&ensp;6.3 Dynamic CMOS Design  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.3.1 Dynamic Logic: Basic Principles  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.3.2 Speed and Power Dissipation of Dynamic Logic  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.3.3 Issues in Dynamic Design  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.3.4 Cascading Dynamic Gates  
&ensp;&ensp;&ensp;&ensp;6.4 Perspectives  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.4.1 How to Choose a Logic Style?  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;6.4.2 Designing Logic for Reduced Supply Voltages  
&ensp;&ensp;&ensp;&ensp;6.5 Summary  
&ensp;&ensp;&ensp;&ensp;6.6 To Probe Further  
&ensp;&ensp;DESIGN METHODOLOGY INSERT C: HOW TO SIMULATE COMPLEX  LOGIC GATES  
&ensp;&ensp;&ensp;&ensp;C.1 Representing Digital Data as a Continuous Entity  
&ensp;&ensp;&ensp;&ensp;C.2 Representing Data as a Discrete Entity  
&ensp;&ensp;&ensp;&ensp;C.3 Using Higher-Level Data Models  
&ensp;&ensp;&ensp;&ensp;C.4 To Probe Further  
&ensp;&ensp;DESIGN METHODOLOGY INSERT D: LAYOUT TECHNIQUES FOR COMPLEX GATES  
&ensp;&ensp;CHAPTER 7: DESIGNING SEQUENTIAL LOGIC CIRCUITS  
&ensp;&ensp;&ensp;&ensp;7.1 Introduction  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.1.1 Timing Metrics for Sequential Circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.1.2 Classification of Memory Elements  
&ensp;&ensp;&ensp;&ensp;7.2 Static Latches and Registers  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.2.1 The Bistability Principle  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.2.2 Multiplexer-Based Latches  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.2.3 Master-Slave Edge-Triggered Register  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.2.4 Low-Voltage Static Latches  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.2.5 Static SR Flip-Flops—Writing Data by Pure Force  
&ensp;&ensp;&ensp;&ensp;7.3 Dynamic Latches and Registers  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.3.1 Dynamic Transmission-Gate Edge-triggered Registers  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.3.2 C2MOS—A Clock-Skew Insensitive Approach  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.3.3 True Single-Phase Clocked Register (TSPCR)  
&ensp;&ensp;&ensp;&ensp;7.4 Alternative Register Styles*  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.4.1 Pulse Registers  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.4.2 Sense-Amplifier Based Registers  
&ensp;&ensp;&ensp;&ensp;7.5 Pipelining: An approach to optimize sequential circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.5.1 Latch- vs. Register-Based Pipelines  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.5.2 NORA-CMOS—A Logic Style for Pipelined Structures  
&ensp;&ensp;&ensp;&ensp;7.6 Non-Bistable Sequential Circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.6.1 The Schmitt Trigger  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.6.2 Monostable Sequential Circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;7.6.3 Astable Circuits  
&ensp;&ensp;&ensp;&ensp;7.7 Perspective: Choosing a Clocking Strategy  
&ensp;&ensp;&ensp;&ensp;7.8 Summary  
&ensp;&ensp;&ensp;&ensp;7.9 To Probe FurtherPART III. A SYSTEM PERSPECTIVE  
&ensp;&ensp;CHAPTER 8: IMPLEMENTATION STRATEGIES FOR DIGITAL ICS  
&ensp;&ensp;&ensp;&ensp;8.1 Introduction  
&ensp;&ensp;&ensp;&ensp;8.2 From Custom to Semicustom and Structured Array Design Approaches  
&ensp;&ensp;&ensp;&ensp;8.3 Custom Circuit Design  
&ensp;&ensp;&ensp;&ensp;8.4 Cell-Based Design Methodology  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8.4.1 Standard Cell  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8.4.2 Compiled Cells  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8.4.3 Macrocells, Megacells and Intellectual Property  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8.4.4 Semi-Custom Design Flow  
&ensp;&ensp;&ensp;&ensp;8.5 Array-Based Implementation Approaches  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8.5.1 Pre-diffused (or Mask-Programmable) Arrays  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;8.5.2 Pre-wired Arrays  
&ensp;&ensp;&ensp;&ensp;8.6 Perspective—The Implementation Platform of the Future  
&ensp;&ensp;&ensp;&ensp;8.7 Summary  
&ensp;&ensp;&ensp;&ensp;8.8 To Probe Further  
&ensp;&ensp;DESIGN METHODOLOGY INSERT E: CHARACTERIZING LOGIC AND SEQUENTIAL CELLS  
&ensp;&ensp;DESIGN METHODOLOGY INSERT F: DESIGN SYNTHESIS  
&ensp;&ensp;CHAPTER 9: COPING WITH INTERCONNECT  
&ensp;&ensp;&ensp;&ensp;9.1 Introduction  
&ensp;&ensp;&ensp;&ensp;9.2 Capacitive Parasitics  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.2.1 Capacitance and Reliability—Cross Talk  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.2.2 Capacitance and Performance in CMOS  
&ensp;&ensp;&ensp;&ensp;9.3 Resistive Parasitics  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.3.1 Resistance and Reliability—Ohmic Voltage Drop  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.3.2 Electromigration  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.3.3 Resistance and Performance—RC Delay  
&ensp;&ensp;&ensp;&ensp;9.4 Inductive Parasitics9.4.1 Inductance and Reliability— Voltage Drop  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.4.2 Inductance and Performance—Transmission Line Effects  
&ensp;&ensp;&ensp;&ensp;9.5 Advanced Interconnect Techniques  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.5.1 Reduced-Swing Circuits  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;9.5.2 Current-Mode Transmission Techniques  
&ensp;&ensp;&ensp;&ensp;9.6 Perspective: Networks-on-a-Chip  
&ensp;&ensp;&ensp;&ensp;9.7 Chapter Summary  
&ensp;&ensp;&ensp;&ensp;9.8 To Probe Further  
&ensp;&ensp;CHAPTER 10: TIMING ISSUES IN DIGITAL CIRCUITS  
&ensp;&ensp;&ensp;&ensp;10.1 Introduction  
&ensp;&ensp;&ensp;&ensp;10.2 Timing Classification of Digital Systems  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.2.1 Synchronous Interconnect  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.2.2 Mesochronous interconnect  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.2.3 Plesiochronous Interconnect  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.2.4 Asynchronous Interconnect9  
&ensp;&ensp;&ensp;&ensp;10.3 Synchronous Design — An In-depth Perspective  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.3.1 Synchronous Timing Basics  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.3.2 Sources of Skew and Jitter  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.3.3 Clock-Distribution Techniques  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.3.4 Latch-Based Clocking *  
&ensp;&ensp;&ensp;&ensp;10.4 Self-Timed Circuit Design*  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.4.1 Self-Timed Logic - An Asynchronous Technique  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.4.2 Completion-Signal Generation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.4.3 Self-Timed Signaling  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.4.4 Practical Examples of Self-Timed Logic  
&ensp;&ensp;&ensp;&ensp;10.5 Synchronizers and Arbiters*  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.5.1 Synchronizers—Concept and Implementation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.5.2 Arbiters  
&ensp;&ensp;&ensp;&ensp;10.6 Clock Synthesis and Synchronization Using a Phase-Locked Loop  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.6.1 Basic Concept  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.6.2 Building Blocks of a PLL  
&ensp;&ensp;&ensp;&ensp;10.7 Future Directions and Perspectives  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.7.1 Distributed Clocking Using DLLs10.7.2 Optical Clock Distribution  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;10.7.3 Synchronous versus Asynchronous Design  
&ensp;&ensp;&ensp;&ensp;10.8 Summary  
&ensp;&ensp;&ensp;&ensp;10.9 To Probe Further DESIGN METHODOLOGY INSERT G: DESIGN VERIFICATION  
&ensp;&ensp;CHAPTER 11: DESIGNING ARITHMETIC BUILDING BLOCKS  
&ensp;&ensp;&ensp;&ensp;11.1 Introduction  
&ensp;&ensp;&ensp;&ensp;11.2 Datapaths in Digital Processor Architectures  
&ensp;&ensp;&ensp;&ensp;11.3 The Adder  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.3.1 The Binary Adder: Definitions  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.3.2 The Full Adder: Circuit Design Considerations  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.3.3 The Binary Adder: Logic Design Considerations  
&ensp;&ensp;&ensp;&ensp;11.4 The Multiplier  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.4.1 The Multiplier: Definitions  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.4.2 Partial-Product Generation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.4.3 Partial Product Accumulation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.4.4 Final Addition  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.4.5 Multiplier Summary  
&ensp;&ensp;&ensp;&ensp;11.5 The Shifter  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.5.1 Barrel Shifter  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.5.2 Logarithmic Shifter  
&ensp;&ensp;&ensp;&ensp;11.6 Other Arithmetic Operators  
&ensp;&ensp;&ensp;&ensp;11.7 Power and Speed Trade-off’s in Datapath Structures  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.7.1 Design Time Power-Reduction Techniques  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.7.2 Run-Time Power Management  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;11.7.3 Reducing the Power in Standby (or Sleep) Mode  
&ensp;&ensp;&ensp;&ensp;11.8 Perspective: Design as a Trade-off  
&ensp;&ensp;&ensp;&ensp;11.9 Summary  
&ensp;&ensp;&ensp;&ensp;11.10 To Probe Further  
&ensp;&ensp;CHAPTER 12: DESIGNING MEMORY AND ARRAY STRUCTURES  
&ensp;&ensp;&ensp;&ensp;12.1 Introduction  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.1.1 Memory Classification  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.1.2 Memory Architectures and Building Blocks  
&ensp;&ensp;&ensp;&ensp;12.2 The Memory Core  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.2.1 Read-Only Memories  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.2.2 Nonvolatile Read-Write Memories  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.2.3 Read-Write Memories (RAM)  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.2.4 Contents-Addressable or Associative Memory (CAM)  
&ensp;&ensp;&ensp;&ensp;12.3 Memory Peripheral Circuitry  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.3.1 The Address Decoders  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.3.2 Sense Amplifiers  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.3.3 Voltage References  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.3.4 Drivers/Buffers  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.3.5 Timing and Control  
&ensp;&ensp;&ensp;&ensp;12.4 Memory Reliability and Yield  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.4.1 Signal-To-Noise Ratio  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.4.2 Memory yield  
&ensp;&ensp;&ensp;&ensp;12.5 Power Dissipation in Memories  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.5.1 Sources of Power Dissipation in Memories  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.5.2 Partitioning of the memory  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.5.3 Addressing the Active Power Dissipation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.5.4 Data-retention dissipation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.5.5 Summary  
&ensp;&ensp;&ensp;&ensp;12.6 Case Studies in Memory Design  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.6.1 The Programmable Logic Array (PLA)  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.6.2 A 4 Mbit SRAM  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;12.6.3 A 1 Gbit NAND Flash Memory  
&ensp;&ensp;&ensp;&ensp;12.7 Perspective: Semiconductor Memory Trends and Evolutions  
&ensp;&ensp;&ensp;&ensp;12.8 Summary  
&ensp;&ensp;&ensp;&ensp;12.9 To Probe Further  
&ensp;&ensp;DESIGN METHODOLOGY INSERT H: VALIDATION AND TEST OF  MANUFACTURED CIRCUITS  
&ensp;&ensp;&ensp;&ensp;H.1 Introduction  
&ensp;&ensp;&ensp;&ensp;H.2 Test Procedure  
&ensp;&ensp;&ensp;&ensp;H.3 Design for Testability  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.3.1 Issues in Design for Testability  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.3.2 Ad Hoc Testing  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.3.3 Scan-Based Test  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.3.4 Boundary-Scan Design  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.3.5 Built-in Self-Test (BIST)  
&ensp;&ensp;&ensp;&ensp;H.4 Test-Pattern Generation  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.4.1 Fault Models  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.4.2 Automatic Test-Pattern Generation (ATPG)  
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;H.4.3 Fault Simulation  
&ensp;&ensp;&ensp;&ensp;H.5 To Probe Further INDEX

## 3 权利声明

所有文章自发布起，作者便享有对该文章的**著作权**，受到《中华人民共和国著作权法》的保护，该专栏内**所有文章均不得被任何人、任何机构或组织以任何形式、任何目的进行转载**。

## 4 CHARPTER1 引言

看完了长长的目录，应该对全书的结构有个大致了解了，那就让我们开始第一章的引言部分吧。

### 1 历史回顾

该部分回顾了从第一台数字计算机的诞生直到现在个人计算机走进千家万户的进步历程，从
