window.examConfig = {
    title: "CNV-20-21 Exam 1",
    timeLimit: 80
};

window.examData = [
  {
    "number": 1,
    "text": "\u2014 Identification and Rules\n\nIn this question you must insert your given exam code. You exam is not valid without the exam code.\n\nThe exam has a time limit of 80 minutes. You can only leave after submitting your exam and only after 45 minutes. We take the best grade of the two exams.\n\nThere will be no further information about the exam questions (*d\u00favidas acerca do enunciado*) provided during the exam, besides the question text itself.\n\nAnswer the questions given the context in the question.\n\n*(Only if strictly needed, you can also insert here any other notes regarding the answering of some question).*\n\nGood work.\n\nLV.",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "- Questions are presented in randomized order.\n- In all questions where wrong choice may lead to penalty there is an option (no response/no penalty).\n- When there is only one correct choice, incorrect choice leads to penalty (1/number-of-incorrect-choices).\n- In questions where there are multiple correct and incorrect options, the correct and incorrect options are graded in a way that selecting all of them leads to zero points.",
    "is_open_text": true,
    "solution_sketch": null
  },
  {
    "number": 2,
    "text": "When deploying an application on the Google App Engine (GAE) PaaS, how does the GAE achieve scalability, i.e. by adhering to what specific behavior?\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "Requests are sent to the servers elastically created to deploy the application."
      },
      {
        "id": "c",
        "text": "Internal application data is managed using a LRU (least recently used) policy."
      },
      {
        "id": "d",
        "text": "Application state in static variables is very limited."
      },
      {
        "id": "e",
        "text": "Web apps are permanently kept in memory."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "partially correct \u2014 Requests are sent to the servers elastically created to deploy the application. (servers are elastically created but requests are sent to the servers already running the application)."
  },
  {
    "number": 3,
    "text": "The Constant Pool is a component of class files as described in the Java VM specification.\n\nThe Constant Pool brings a number of advantages, such as:\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "Simpler decoding and memory savings."
      },
      {
        "id": "b",
        "text": "Faster access and fixed instruction size for each instruction type."
      },
      {
        "id": "c",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "d",
        "text": "Faster execution and smaller code foot-print."
      },
      {
        "id": "e",
        "text": "Memory savings and faster access."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "Constant Pool creates indirection. Most constant values are not stored in the bytecode itself, therefore access/execution cannot be faster due to (as an advantage of) CP."
  },
  {
    "number": 4,
    "text": "In a cloud data center facility where the total energy delivered to computing equipment is 1250 kW, from an overall consumption of 2500 kW, what is the PUE (power usage effectiveness) of this facility?\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "1.25"
      },
      {
        "id": "b",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "c",
        "text": "2.00"
      },
      {
        "id": "d",
        "text": "1.50"
      },
      {
        "id": "e",
        "text": "0.50"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 5,
    "text": "Regarding the cloud storage Dynamo from Amazon, identify a specific key design decision.\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "Membership information is managed using hinted handoffs."
      },
      {
        "id": "b",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "c",
        "text": "Permanent faults are handled synchronously with anti-entropy."
      },
      {
        "id": "d",
        "text": "Partitioning of data is decided using Gossip for consistency."
      },
      {
        "id": "e",
        "text": "Write availability is ensured using vector-clocks whose size does not adapt to update rates."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 6,
    "text": "Consider a generic MapReduce approach to addressing WordCount as seen in the lectures, e.g., to count the frequency (number of times occurring) of each word within the full content of a variable (possibly very large) set of variable-sized simple text files.\n\nConsider that in one execution the whole of the input consists of the following three files with one line each (content after filename):\n\n- File A.txt: `abc xyz 123`\n- File B.txt: `abc abc 456`\n- File C.txt: `xyz wgf 987`\n\nHow is this job's execution going to be carried out, according to Hadoop's architecture?\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "The map function is going to be called 3 times and the reduce function is going to be called 6 times."
      },
      {
        "id": "b",
        "text": "The map function is going to be called 3 times and the reduce function is going to be called 3 times."
      },
      {
        "id": "c",
        "text": "There are going to be 3 Mappers and 1 Reducer processes."
      },
      {
        "id": "d",
        "text": "The map function is going to be called 9 times and the reduce function is going to be called 3 times."
      },
      {
        "id": "e",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "- Mapper process is run for each input split (three small files are three input splits), map function is going to be executed 3 times.\n- By default, there is only one reducer process.\n- The reducer function is called once for each distinct key produced during mapping (and given as argument all tuples sharing that same key)."
  },
  {
    "number": 7,
    "text": "When deploying instances in Amazon Web Services (AWS), the user can make selections based on geographical and fault-tolerance criteria.\n\nWhat are they?\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "Areas and Locations."
      },
      {
        "id": "c",
        "text": "Types and Regions."
      },
      {
        "id": "d",
        "text": "Types and Availability Zones."
      },
      {
        "id": "e",
        "text": "Regions and Availability Zones."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 8,
    "text": "Consider the algorithm Generational GC in how it organizes the heap, how it identifies and preserves reachable (live) objects, and detects and reclaims garbage objects to free up memory for the application.\n\nWhat are the key specific feature(s) of this GC algorithm when compared to other algorithms?\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "It divides the heap in two zones and wastes half of memory in one of them."
      },
      {
        "id": "b",
        "text": "It carries out garbage collection with an average longer collection time."
      },
      {
        "id": "c",
        "text": "It employs a copying GC in the mature space to handle long-lived objects and to prevent fragmentation."
      },
      {
        "id": "d",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "e",
        "text": "It divides the heap in two zones and avoids multiple passes in most of the heap."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "partially correct \u2014 It divides the heap in two zones and avoids multiple passes in most of the heap. (the heap is divided in two zones. most of the heap (~90%) is the mature space and is garbage collected with compacting GC that needs multiple passes over the heap when it compacts the mature space.)"
  },
  {
    "number": 9,
    "text": "In the context of the operation of a chillerless data center such as DeepGreen, what is the logical sequence of actions that is carried out in order to perform cooling with little energy consumption and environmental impact.\n\n<strong>(Drag-and-Drop the small sentences to their appropriate place)</strong>\n\n- Action 1: \\_\\_\\_\\_\n- Action 2: \\_\\_\\_\\_\n- Action 3: \\_\\_\\_\\_\n- Action 4: \\_\\_\\_\\_\n- Action 5: \\_\\_\\_\\_\n\nOptions:\n- The heat exchangers chill the internal chilled water loop and take the rejected heat back into return pipes.\n- The lake water is filtrated and pumped through two redundant pipes to the DeepGreen datacenter.\n- The intake pipe pulls 6\u00baC cold water from a depth of 60m from Lake Walensee.\n- The hot return air is strictly separated and moved back to the computer room air handling units.\n- The heated return lake water is pumped back at 14\u00baC and injected into Lake Walensee at a depth of 30m.",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 10,
    "text": "In BigTable, the master is a single process that performs top-level coordination for the entire cluster.\n\nAlthough this may potentially incur in a bottleneck, BigTable frees the master from substantial coordination effort because of an important design decision.\n\nWhich one is more relevant?\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "In BigTable, entities are ordered alphabetically."
      },
      {
        "id": "b",
        "text": "BigTable allows sequential scanning of entities (rows) based on key-prefixes."
      },
      {
        "id": "c",
        "text": "BigTable performs compaction of memtables into SSTables to reduce log and memory occupation."
      },
      {
        "id": "d",
        "text": "BigTable uses metadata tablets to organize partitioning."
      },
      {
        "id": "e",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 11,
    "text": "Consider an Infrastructure-as-a-Service deployment, in order to seamlessly extend computing resources for a small start-up company, in a real-life scenario employing replicated m front-ends and n replicated back-ends. When redirecting requests to the web application among a number of virtual servers, what situation can happen in the case of scaling and/or failures?\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "In load balancing with HTTP redirection, when a front-end server fails, there is a small delay for 1/m of ongoing user sessions."
      },
      {
        "id": "c",
        "text": "In load balancing based on DNS, scale-down time is related with user session duration."
      },
      {
        "id": "d",
        "text": "In load balancing with HTTP redirection, when a front-end server fails, there is a long delay for 1/m of new user sessions."
      },
      {
        "id": "e",
        "text": "In load balancing with Level-4 network rerouting, when a back-end server fails there is a long delay for 1/n of new user sessions."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 12,
    "text": "In the context of the conditions for ISA virtualizability, consider a hypothetical ISA including the following exemplificative instructions as described:\n\n- Inst_A: this instruction can only be executed in system mode, otherwise traps.\n- Inst_B: this instruction retrieves the global wide state of hardware resources.\n- Inst_C: this instruction allows to take control of the CPU scheduling timer.\n- Inst_D: this instruction performs arithmetic multiplication of two registers.\n\nConsidering only what you can conservatively infer from the presented information about instructions Inst_A, Inst_B, Inst_C, Inst_D, identify which of the following sentences is/are correct.\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "Inst_D prevents ISA_X from being efficiently virtualizable."
      },
      {
        "id": "b",
        "text": "Inst_A and Inst_D can be executed in system-mode."
      },
      {
        "id": "c",
        "text": "Inst_B is a behaviour-sensitive instruction and therefore critical instruction."
      },
      {
        "id": "d",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "e",
        "text": "Inst_A does not prevent ISA_X from being well-behaved."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "1 correct and 1 incorrect answer awards half the points of a correct option."
  },
  {
    "number": 13,
    "text": "In AWS, programmers can invoke AWS CloudWatch cloud monitoring services in order to assess the resource usage of their instances across a dimension such as \\_\\_\\_\\_.\n\nThe list of data-points returned by AWS CloudWatch is the \\_\\_\\_\\_ returned.\n\nThese data-points can reflect maximum, minimum, average, etc. values or other \\_\\_\\_\\_ applied to the monitoring data gathered.\n\nAll values returned are expressed according to a given \\_\\_\\_\\_.\n\n<strong>(no penalty for wrong answers)</strong>",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [
      "AutoScalingGroup",
      "metric",
      "statistic",
      "unit"
    ],
    "distractors": [
      "ResourceGroup",
      "log",
      "value",
      "InstanceID",
      "average",
      "dimension"
    ]
  },
  {
    "number": 14,
    "text": "Despite the many advantages Cloud Computing brings, it also entails some potential fragilities according to the \"Above the Clouds\" paper.\n\nGive examples of such potential fragilities identified.\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if this is only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "Cost of data transfer."
      },
      {
        "id": "c",
        "text": "Lock-out."
      },
      {
        "id": "d",
        "text": "Availability."
      },
      {
        "id": "e",
        "text": "Bad programming."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "1 correct and 1 incorrect answer awards half the points of a correct option."
  },
  {
    "number": 15,
    "text": "In the context of binary translation, consider a scenario where the execution is dominated by the repetitive emulation (inside a loop) of the following sequence of translated blocks of code: A, B, C.\n\n- Block A is 5 instructions long,\n- Block B is 10 instructions long,\n- Block C is 15 instructions long, and\n- the Emulation Manager requires 5 instructions to execute.\n\nWhat is the average speedup in emulation that can be obtained by applying an optimization such as translation chaining?\n\nAnswer with a number and a short reasoning for your choice.",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": [],
    "is_open_text": true,
    "solution_sketch": "X = Total execution of loop without translation chaining: A + EM + B + EM + C + EM = 45 instructions per loop iteration.\n(EM is engaged in the backward loop edge as any other transition among blocks of translated code)\n\nY = Total execution of loop with translation chaining enabled: A + B + C = 30 instructions per loop iteration.\n(each block of translated code already contains a jump instruction at the end whose target address is replaced by the TC optimization, no more instructions are added)\n\n**Speedup = X / Y = 1.5 (i.e. 50% faster execution).**"
  },
  {
    "number": 16,
    "text": "In the context of emulation by interpretation, how do indirect threaded interpretation (indirect threading) and direct threaded interpretation (direct threading) compare?\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "Direct threading has faster steady-state performance than indirect threading."
      },
      {
        "id": "b",
        "text": "Direct threading has worse code portability than indirect threading."
      },
      {
        "id": "c",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "d",
        "text": "Both have good start-up performance due to threading."
      },
      {
        "id": "e",
        "text": "Direct threading eliminates higher memory requirements of indirect threading."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "b"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "1 correct and 1 incorrect answer awards half the points of a correct option."
  },
  {
    "number": 17,
    "text": "System VMs can be employed following a classic (Type-1) or a hosted VM (Type-2) approach.\n\nHow does this dichotomy influence System VMs deployment concerning the rest of the software stack in execution?\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "In Type-1 and Type-2, the Virtual Machine Monitor (VMM) is in charge of virtualizing the CPU."
      },
      {
        "id": "b",
        "text": "In Type-1, the Virtual Machine Monitor (VMM) only needs to interact with the host OS to perform Input/Output."
      },
      {
        "id": "c",
        "text": "In Type-2, guest applications need to invoke the host OS to perform system calls."
      },
      {
        "id": "d",
        "text": "In Type-1, the Virtual Machine Monitor (VMM) controls the memory mappings in order to carry out memory virtualization."
      },
      {
        "id": "e",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "1 correct and 1 incorrect answer awards half the points of a correct option."
  },
  {
    "number": 18,
    "text": "<strong>(2 marks)</strong>\n\nThe Superfriend social network wants to email all users with more than 25 friends telling them how many other Superfriend users have the same number of friends (rank) as them (e.g. \"Congratulations Joe, 200 other Superfriend users have 56 friends just like you.\").\n\nThe email messages will be produced by a MapReduce application that will be input a text list of all users and their respective friends' contact info.\n\nEach line in that input file has the following format and that you can iterate and access as a list or array in the pseudocode:\n\n`<username>, <name>, <age>, <user_email>, <friend_1>, <friend_1_email>, <friend_2>, <friend_2_email>,..., <friend_n>,<friend_n_email>`\n\nAssume the standard signature for the mapper: `List<k2,v2> map(int, string)` and reducer: `List<k3, v3> reduce(k2, List<v2>)` functions, where map has the default MapReduce input (cursor/line number and text line content) and k2, v2, k3 and v3 can all be replaced with types of your choice.\n\nWrite the pseudocode for a MapReduce application, with a single map and a single reduce method.\n\nThe final output of the reduce function should produce the required information for each case when appropriate:\n- the email address of Superfriend user that should be emailed, and\n- the number of friends with the same rank.\n\n<strong>(if you need, you can briefly state any assumptions at the end of the answer after the pseudocode)</strong>",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [],
    "distractors": [],
    "is_open_text": true,
    "solution_sketch": "**Mapper:**\n- The key for the mapper and reducer should be the number of friends (rank) each user has, so that all users with the same number of friends will be processed in the same reducer function.\n- The count can be calculated based on the size of the list (divided by two minus 4), accounting solely each friend once (e.g., with its email).\n- This also allows efficient filtering at the Mapper (avoiding sending to the reducer information about users with rank <= 25).\n- Mapper outputs tuples with the form (rank, user-email, emails-of-friends[]).\n- Outputting user-email allows later emailing the congratulatory message to each user stating how many users have the same rank.\n- (Outputting emails-of-friends, i.e., the emails of all friends of a user, or to be simpler, just (re)-forwarding the complete data in the user-info line as it is done in PageRank, allows later to know how many of the friends, of each user, have the same rank).\n\n**Reducer:**\n- At the reducer function, the key is the number of friends (rank), and each of the values carries the information mapped for a specific user of that rank (user-email, emails-of-friends[]).\n- With this information, aggregating info about all users with a given rank, it is immediately possible to count the number of tuples in the reducer arguments.\n- This count and user-email allows emailing to each user the congratulatory message stating how many users have the same rank.\n- For each tuple, insert into a local variable hashtable/associative-array a tuple with the user-email as key and the emails-of-friends[] as value.\n- Once completed, for each of the hashtable/associate-array elements, iterate the emails-of-friends[] value and add one for each email that also belongs to the hashtable/associate-array. This allows stating how many of each user's friends share the same rank as him/her.\n\n**Note:** Based on your interpretations provided, an efficient implementation that is able to email the congratulatory message will get full marks, with the reasoning to determine the number of friends with the same rank considered when assessing errors or inefficiencies."
  },
  {
    "number": 19,
    "text": "Method inlining is a key and frequently employed optimization to achieve high-performance emulation in Java.\n\nTaking into consideration how method inlining can be implemented and when it should be activated, identify the correct sentence(s).\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "Methods shorter than calling sequence may be inlined in every location they are invoked."
      },
      {
        "id": "b",
        "text": "Using call-graph to identify methods to be inlined incurs in higher overhead."
      },
      {
        "id": "c",
        "text": "Method inlining always leads to improve cache behaviour."
      },
      {
        "id": "d",
        "text": "Using stack-frame to identify where to inline hot and small methods is always accurate."
      },
      {
        "id": "e",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "b"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 20,
    "text": "Consider a stream processing scenario where messages published in a forum (e.g. tweets, posts) are continuously monitored in order to detect the topics that are trending (e.g., Top-100 ranking of references in messages), considering the number of times they are referenced across messages over time.\n\nAnalyse how the window and event handling of Flink and Spark Streaming may contribute to detect the potentially trending topics in a timely manner (e.g. so that users may be advised of a potential emerging trending topic, and increase their chances of publishing a message on it as soon as it starts trending).\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "Spark Streaming can be set up to manage a sliding window with 200 seconds of length and 5 second of sliding interval."
      },
      {
        "id": "c",
        "text": "Spark Streaming can be set up to manage a tumbling window of 10 seconds of length."
      },
      {
        "id": "d",
        "text": "Flink can be set up to manage a sliding window with 25 seconds of length and 1 second of sliding interval."
      },
      {
        "id": "e",
        "text": "Flink can be set up to manage a sliding window of 200 seconds of length and 1 second of sliding interval, and that is event-time based, i.e., to take into account the exact time each message was published."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "c",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "the central aspect to reflect variations in tuple counts, with significance, as soon as possible, is to have as small as possible window length."
  },
  {
    "number": 21,
    "text": "What sequence of byte-code could be used to better illustrate the retrieval of the second element of a local variable f (that is an array of integers) inside a method.\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "aload_0 / iconst_1 / iaload"
      },
      {
        "id": "b",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "c",
        "text": "fload_1 / iconst_2 / faload"
      },
      {
        "id": "d",
        "text": "aload_1 / iconst_2 / iaload"
      },
      {
        "id": "e",
        "text": "iload_1 / iconst_1 / iaload"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "note": "partially correct \u2014 aload_1; iconst_2; iaload (loads array reference in operand stack and element index but accesses another element - the second element in an array is position 1)."
  },
  {
    "number": 22,
    "text": "During the execution of a MapReduce job, what stage/phase is able to process as input all the tuples, produced across the entire cluster, that share the same key.\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "Reduce."
      },
      {
        "id": "c",
        "text": "Shuffling."
      },
      {
        "id": "d",
        "text": "Map."
      },
      {
        "id": "e",
        "text": "Combine."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "b"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 23,
    "text": "A Google App Engine application can be comprised of instances operating according to two types, depending on how they execute.\n\nWhat are they?\n\n<strong>(select the option that best fits the question)</strong>",
    "options": [
      {
        "id": "a",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "b",
        "text": "Modules and back-ends."
      },
      {
        "id": "c",
        "text": "Dynamic and resident."
      },
      {
        "id": "d",
        "text": "Versions and deployments."
      },
      {
        "id": "e",
        "text": "Console-launched or command-line launched."
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 24,
    "text": "Compared to Infrastructure-as-a-Service (IaaS), Function-as-a-Service (FaaS) is able to offer:\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "More fine-grained billing."
      },
      {
        "id": "b",
        "text": "Higher level of control over the hardware resources employed."
      },
      {
        "id": "c",
        "text": "Increased ability to take advantage of hardware with higher resource capabilities."
      },
      {
        "id": "d",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      },
      {
        "id": "e",
        "text": "Higher elasticity."
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": []
  },
  {
    "number": 25,
    "text": "When comparing Spark against MapReduce, identify Spark's advantageous features over MapReduce?\n\n<strong>(select all the correct options)</strong>",
    "options": [
      {
        "id": "a",
        "text": "Spark provides automatic fault-tolerance."
      },
      {
        "id": "b",
        "text": "Spark allows in-memory processing."
      },
      {
        "id": "c",
        "text": "Spark allows eliminating irrelevant input."
      },
      {
        "id": "d",
        "text": "Spark has special support for the reuse (e.g., iterative, interactive) of working sets."
      },
      {
        "id": "e",
        "text": "<strong><strong>No response (no penalty if only option answered)</strong>.</strong>"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": []
  }
];
