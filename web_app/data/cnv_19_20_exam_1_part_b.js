window.examConfig = {
    title: "◄ CNV-19-20-Exam-1-Part-B (hidden)",
    timeLimit: 40
};

window.examData = [
  {
    "number": 1,
    "text": "Migration of VMs in VMotion (live migration) is carried out while attempting to minimize the amount of time the VM may be unresponsive (i.e., while neither running at the current host nor running at the intended destination host). This operation takes place by phases. What ordering of the following actions best reflects how live migration operates?\n\n<em>(Drag-and-Drop the small sentences to their appropriate place)</em>\n\nPhase 1: [ ]\nPhase 2: [ ]\nPhase 3: [ ]\nPhase 4: [ ]\nPhase 5: [ ]\n\n<strong>[A]</strong> Capture stable VM state.\n<strong>[B]</strong> Copy complete contents of VM memory.\n<strong>[C]</strong> Suspend VM execution.\n<strong>[D]</strong> Copy incremental VM capsule.\n<strong>[E]</strong> Activate VM on host.",
    "options": [],
    "is_multi": false,
    "correct_ids": [],
    "fill_in_blanks": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 2,
    "text": "In a cloud data center facility where the total energy consumed is 2500 kW and the energy delivered to computing equipment is 2000 kW, what is the PUE (power usage effectiveness) of this facility?\n\n<em>(select the option that best fits the question).</em>",
    "options": [
      {
        "id": "a",
        "text": "1.50"
      },
      {
        "id": "b",
        "text": "<strong>No response (no penalty).</strong>"
      },
      {
        "id": "c",
        "text": "1.25"
      },
      {
        "id": "d",
        "text": "1.20"
      },
      {
        "id": "e",
        "text": "0.80<br><br><em></em>*"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 3,
    "text": "During the execution of a MapReduce job, what stage/phase needs to perform sorting before providing results to following stages/phases?\n<em>(select the option that best fits the question).</em>",
    "options": [
      {
        "id": "a",
        "text": "Map."
      },
      {
        "id": "b",
        "text": "Shuffling."
      },
      {
        "id": "c",
        "text": "Combine."
      },
      {
        "id": "d",
        "text": "Reduce."
      },
      {
        "id": "e",
        "text": "<strong>No response (no penalty)</strong><br><br><em></em>*"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "b"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 4,
    "text": "A smart city set up a simple monitoring system do detect hot-spots of traffic congestion across the city and period of the day, e.g. to allow identifying locations with over 1000 cars passing from 8h00-8h01 (or any other minute interval) over the days, to accurately identify all the typical periods of heavy traffic.\n\nThe input consists of a text file where each line stores one record regarding each tracked car (all fields are stored as strings).\n\nThe camera logs database contains:-\n(cameraID, locationID, day-of-month, month, hour-of-day, minute, second, license-plate, speed).\n\nFor this problem, what would be an adequate choice of key k for the tuples to be outputted as intermediate result (output (k, v)) by the mappers while processing each line record?\n\nAssume concat is an auxiliary function that concatenates strings with separator \"/\" between them.\n\n<em>(select the option that best fits the question).</em>\n<em>(No penalty for wrong answer.)</em>",
    "options": [
      {
        "id": "a",
        "text": "k = concat(cameraID, locationID, day-of-month, month, hour-of-day, minute);"
      },
      {
        "id": "b",
        "text": "k = concat(cameraID, locationID, minute);"
      },
      {
        "id": "c",
        "text": "k = concat(license_plate, hour-of-day, minute);"
      },
      {
        "id": "d",
        "text": "k = concat(locationID, hour-of-day, minute);<br><br><em></em>*"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 2.0,
    "marks_text": "Marked out of 2.00"
  },
  {
    "number": 5,
    "text": "Partitioners in MapReduce partition the intermediate data before being submitted to the reducers. They can be operated by default or customized by application code.\nWhat do partitioners determine or can influence?\n<em>(select all the correct options).</em>",
    "options": [
      {
        "id": "a",
        "text": "A custom Partitioner can determine the set of keys to be processed on the same server."
      },
      {
        "id": "b",
        "text": "A custom Partitioner can determine which specific server receives all the tuples with a given key."
      },
      {
        "id": "c",
        "text": "A custom Partitioner can determine the order of tuples processing."
      },
      {
        "id": "d",
        "text": "<strong>No response (no penalty)</strong>"
      },
      {
        "id": "e",
        "text": "A custom Partitioner can improve job performance when the key-space is skewed (i.e. some keys appear much more frequently than others).<br><br><em></em>*"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 6,
    "text": "An Azure application can be comprised of instances of what roles?\n<em>(select the option that best fits the question).</em>",
    "options": [
      {
        "id": "a",
        "text": "Web role and worker role."
      },
      {
        "id": "b",
        "text": "Worker role and service role."
      },
      {
        "id": "c",
        "text": "<strong>No response (no penalty)</strong>"
      },
      {
        "id": "d",
        "text": "Web Role and service role."
      },
      {
        "id": "e",
        "text": "Service role and computation role.<br><br><em></em>*"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "a"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 7,
    "text": "When deploying an application on the Google App Engine (GAE) PaaS, programmers have their lives made easier because the GAE takes care of (i.e., manages) the following items of the deployment:\n<em>(select the option that best fits the question).</em>",
    "options": [
      {
        "id": "a",
        "text": "The GAE manages the hardware, the programming language, the application configuration."
      },
      {
        "id": "b",
        "text": "The GAE manages the programming language, the domain services, the application configuration."
      },
      {
        "id": "c",
        "text": "The GAE manages the hardware, the hypervisor, the frameworks."
      },
      {
        "id": "d",
        "text": "The GAE manages the hardware, the frameworks, the application configuration."
      },
      {
        "id": "e",
        "text": "<strong>No response (no penalty)</strong><br><br><em></em>*"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 8,
    "text": "Applications running on top of cloud deployments can be integrated by means of using message queues. What approaches can message queues enable?\n<em>(select all the correct options).</em>",
    "options": [
      {
        "id": "a",
        "text": "Message queues allow faster data streaming between applications with pre-agreed formats."
      },
      {
        "id": "b",
        "text": "Message queues allow reliable messaging among applications."
      },
      {
        "id": "c",
        "text": "<strong>No response (no penalty)</strong>"
      },
      {
        "id": "d",
        "text": "Message queues allow avoiding double processing of data."
      },
      {
        "id": "e",
        "text": "Message queues allow weakly connected applications.<br><br><em></em>*"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 9,
    "text": "Regarding the cloud storage Dynamo from Amazon, identify a specific key design decision.\n<em>(select the option that best fits the question).</em>",
    "options": [
      {
        "id": "a",
        "text": "Write availability is ensured using vector-clocks whose size adapts to update rates."
      },
      {
        "id": "b",
        "text": "Partitioning of data is decided using Gossip for consistency."
      },
      {
        "id": "c",
        "text": "Membership information is managed using Merkle trees."
      },
      {
        "id": "d",
        "text": "Permanent faults are handled asynchronously with anti-entropy."
      },
      {
        "id": "e",
        "text": "<strong>No response (no penalty)</strong><br><br><em></em>*"
      }
    ],
    "is_multi": false,
    "correct_ids": [
      "d"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 10,
    "text": "Consider a cloud deployed web application uses cloud storage to store data about an online book store (e.g., book info, book categories, book quantities at stores, users' orders).\nAnalyse a simplified scenario where application code processes orders by adding each ordered book to the entity representing the order, and subtracting units of the ordered books from quantities at stores. For correctness, all these operations should be enclosed in a transaction.\nIn this scenario, what guarantees can the application expect from typical cloud storage systems such as BigTable, Percolator, and Datastore?\n<em>(select all the correct options).</em>",
    "options": [
      {
        "id": "a",
        "text": "<strong>No response (no penalty)</strong>"
      },
      {
        "id": "b",
        "text": "Percolator and Datastore can handle transactions encompassing several entities that reside in different servers."
      },
      {
        "id": "c",
        "text": "BigTable and Datastore can handle transactions encompassing several entities that reside in the same server."
      },
      {
        "id": "d",
        "text": "All of the above cloud storage systems handle distributed transactions."
      },
      {
        "id": "e",
        "text": "Percolator can handle transactions encompassing several entities that reside in the same server.<br><br>Explanation: b) is false because datastore cannot handle transactions in different servers - only in a single server.<br>c) is false because bigtable cannot handle transactions encompassing more than one entity.<br>d) is false, only percolator can do this.<br>e) is true because percolator can do this (and of course it can do more than this), but this is the true sentence.<br><br><em></em>*"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 11,
    "text": "Resilient distributed datasets (RDDs) are a core contribution of Spark. What are the features of RDDs that enable them to provide fault-tolerance to jobs executing on Spark?\n<em>(select all the correct options).</em>",
    "options": [
      {
        "id": "a",
        "text": "RDDs keep information about data dependencies."
      },
      {
        "id": "b",
        "text": "RDDs are partitioned logical collection of records."
      },
      {
        "id": "c",
        "text": "<strong>No response (no penalty)</strong>"
      },
      {
        "id": "d",
        "text": "RDDs can be cached in memory."
      },
      {
        "id": "e",
        "text": "RDDs keep information about transformations and operations.<br><br><em></em>*"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "a",
      "e"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  },
  {
    "number": 12,
    "text": "Consider a stream processing scenario where all street crossings and traffic lights have sensors/cameras tracking cars' license plate and speed, to assess traffic intensity and detect bottlenecks near real-time during day.\nAnalyse how the window and event handling of Flink and Spark Streaming may contribute to obtain adequate results in the presence of inevitable communication failures from sensors/cameras, wireless networks, etc. before the data reaches the servers.\n\n<em>(select all the correct options).</em>",
    "options": [
      {
        "id": "a",
        "text": "Spark Streaming uses micro-batches of RDDs and Flink uses distributed snapshots."
      },
      {
        "id": "b",
        "text": "Flink can manage windows that are event-time based."
      },
      {
        "id": "c",
        "text": "Flink and Spark Streaming are able to process all the events exactly-once."
      },
      {
        "id": "d",
        "text": "<strong>No response (no penalty)</strong>"
      },
      {
        "id": "e",
        "text": "Flink and Spark Streaming provide sliding windows semantics.<br><br>\u25c4 CNV-19-20-Exam-1-Part-B (hidden)"
      }
    ],
    "is_multi": true,
    "correct_ids": [
      "b",
      "c"
    ],
    "fill_in_blanks": [],
    "distractors": [],
    "marks": 1.0,
    "marks_text": "Marked out of 1.00"
  }
];
