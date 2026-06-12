***

**Question 1**
Not answered
Marked out of 1.00

In the context of Cloud Computing, identify the available deployment models for a cloud.
*(select all the correct options).*

Select one or more:
[x] a. Hybrid cloud.
[ ] b. No response (no penalty).
[x] c. Public cloud.
[ ] d. Free cloud.
[ ] e. Professional cloud.

***

**Question 2**
Not answered
Marked out of 1.00

Considering emulation by interpretation with decode-and-dispatch, there are a number of specific features to D&D that hinder its performance when compared to other interpretation-based approaches. What are the causes for this inefficiency?
*(select all the correct options).*

Select one or more:
[ ] a. Excessive number of accesses to register context blocks.
[x] b. Low emulation speed in steady-state.
[x] c. Excessive number of branches/jumps in the emulator code.
[ ] d. High economic cost.
[ ] e. No response (no penalty)

***

**Question 3**
Not answered
Marked out of 1.00

In the context of binary translation, consider a scenario where the execution of the code is dominated by long running functions, each one performing extensive testing (e.g., if-then-else-like code) and calculations (e.g., additions and multiplications) on the parameters/arguments they receive.
What is the approach to developing optimizations that would provide the highest returns when taking into account potential performance improvements and development overhead?
*(select the option that best fits the question).*

Select one:
[x] a. Translation chaining.
[ ] b. Shadow stack.
[ ] c. No response (no penalty)
[ ] d. Software indirect jump prediction and shadow stack.
[ ] e. Translation chaining and shadow stack.

***

**Question 4**
Not answered
Marked out of 1.00

What mappings of page addresses are employed in Memory Virtualization carried out by system VMs?
*(select all the correct options).*

Select one or more:
[x] a. virtual addresses to real addresses.
[x] b. real addresses to physical addresses.
[ ] c. guest addresses to virtual addresses.
[ ] d. No response (no penalty)
[ ] e. user addresses to system addresses.

***

**Question 5**
Not answered
Marked out of 1.00

When trying to determine whether a given ISA (Instruction Set Architecture) is efficiently virtualizable (according to Popek and Goldberg), what are the conditions (from the following) that must hold true for that to happen?
*(select all the correct options).*

Select one or more:
[ ] a. There must only be a few critical instructions and well identified.
[ ] b. Any privileged instruction must also be sensitive.
[x] c. Any sensitive instruction must also be privileged.
[ ] d. No response (no penalty)
[x] e. The ISA must be a well-behaved ISA.

***

**Question 6**
Not answered
Marked out of 1.00

When optimizing Memory Virtualization by employing shadow page tables, what information does the Virtual Machine Monitor (VMM) need to maintain?
*(select all the correct options).*

Select one or more:
[x] a. Direct mappings from the memory of each guest process (program running) to the host memory.
[ ] b. No response (no penalty)
[ ] c. Complete replica of the contents of each guest system VM page.
[ ] d. Complete replica of the contents of the most frequently accessed guest process (program running) pages.
[ ] e. Direct mappings from the memory of each guest system VM page to host memory.

***

**Question 7**
Not answered
Marked out of 1.00

An AWS instance of a virtual server needs to communicate with other VMs and possibly with the outside world. For that purpose, what type of addresses are assigned to each individual AWS instance?

*(select the option that best fits the question).*

Select one:
[ ] a. Elastic and static addresses.
[ ] b. Fast and slow addresses.
[x] c. Public and private addresses.
[ ] d. No response (no penalty).
[ ] e. Manual and automatic addresses.

***

**Question 8**
Not answered
Marked out of 1.00

In AWS CloudWatch, applications can assess `[measures]` in order to monitor their behavior and performance.
A returned `[metric]` provides a list data-points returned by CloudWatch.
All values returned are expressed according to a given `[unit]`.
Results obtained from different AWS services are organized across different `[namespace]`.

***

**Question 9**
Not answered
Marked out of 1.00

In an Infrastructure-as-a-Service deployment (e.g., a web application over Amazon EC2 as in the CNV project), what are the key factors that must be taken into account when calculating the grace period assigned to a newly launched instance (VM) in an AutoScale Group?
*(select the option that best fits the question).*

Select one:
[ ] a. Average time to boot an instance.
[x] b. Typical maximum expected time to boot an instance plus and to start the application.
[ ] c. Average time to boot an instance plus average time to start the application.
[ ] d. Typical maximum expected time to boot an instance.
[ ] e. No response (no penalty).

***

**Question 10**
Not answered
Marked out of 1.00

What sequence of byte-code could be used to illustrate the retrieval the value of an integer field inside an instance object being accessed by code inside an instance method of the corresponding class (i.e., the *this* object)?
*(select the option that best fits the question).*

Select one:
[ ] a. No response (no penalty)
[ ] b.
aload_0
iload_2
[x] c.
aload_0
getfield #2
[ ] d.
iload_0
getfield #3
[ ] e.
aload_0
putfield #1

***

**Question 11**
Not answered
Marked out of 1.00

Considering the following excerpt of Java code:
```java
MyObject o = new MyObject();
System.out.println(o.process("cde", "123", "abc"));
```
Knowing that method *process* declares no variables, what byte-code instruction should be used in the byte-code inside the method in order to access the second argument passed in the method invocation (illustrated in the previous excerpt)?

Select one:
[x] a. aload_2
[ ] b. iload_1
[ ] c. iload_2
[ ] d. No response (no penalty).
[ ] e. aload_1

***

**Question 12**
Not answered
Marked out of 1.00

Consider the algorithm *copying GC* in how it organizes the heap, how it identifies and preserves reachable (live) objects, and detects and reclaims garbage objects to free up memory for the application.
What are the key specific features of *copying GC*, when compared to other algorithms?
*(select the option that best fits the question).*

Select one:
[x] a. It divides the heap in two zones and avoids multiple passes through the heap.
[ ] b. It divides the heap in two equal zones and maximizes the occupation of both of them.
[ ] c. It places live objects contiguously in memory.
[ ] d. It starts with root-set references and traces all reachable objects.
[ ] e. No response (no penalty).

***

**Question 13**
Not answered
Marked out of 1.00

Checking array bounds in array accesses must be performed dynamically by the Java VM when executing bytecodes. This is a source of significant overhead as it requires checking array index against array length/size in every access. Check the following excerpt of Java code receiving an array *buffer* of size/length 1000:

```java
int calc (int buffer [] ){
  int total = 0;
  for (int i=0;i<100;i++) {
    total += buffer[i];
  }
  return total;
}
```

Consider that array bound checking optimizations were enabled.
State how many (an integer number) of these checks the Java VM would be able to avoid/bypass?

*(No penalty for wrong answer.)*

**Answer:** 100 (no element access inside the loop needs to be checked against array bounds since the array is found to be greater that 100 elements).

◄ CNV-19-20-Exam-1-Part-A (hidden)
