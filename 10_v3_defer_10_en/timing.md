# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, what’s the best way to get from London to Edinburgh?
     3.85s  agent 발화 시작: Well, that depends— I mean, do you prefer speed, or do you w
     3.85s  user  발화 끝
     9.79s  user  발화 시작: Scenery, definitely. I’m not in a huge rush.
     9.79s  agent 발화 끝
    12.59s  agent 발화 시작: Ah, a good choice. Then I’d suggest the train. It’s a lovely
    12.59s  user  발화 끝
    18.53s  user  발화 시작: Is it a direct train?
    18.53s  agent 발화 끝
    20.28s  agent 발화 시작: <ret> Yes, it is. LNER runs direct trains from London King’s
    20.28s  <ret> 발화 (turn5 첫 프레임)
    20.28s  user  발화 끝
    20.36s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.05s]: (tool result) LNER operates direct trains from London King’s Cross to 
    31.47s  user  발화 시작: Four hours twenty… sounds reasonable. What about flying? How
    31.47s  agent 발화 끝
    35.66s  agent 발화 시작: <ret> It’s faster, naturally. Flying takes about one hour an
    35.66s  <ret> 발화 (turn7 첫 프레임)
    35.66s  user  발화 끝
    35.90s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.05s]: (tool result) Flights from London to Edinburgh take approximately one 
    45.80s  user  발화 시작: Hmm… I suppose. What’s the weather like in Edinburgh right n
    45.80s  agent 발화 끝
    49.65s  agent 발화 시작: <ret> Let me check that for you. It's twelve degrees Celsius
    49.65s  <ret> 발화 (turn9 첫 프레임)
    49.65s  user  발화 끝
    50.61s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.10s]: (tool result) The current weather in Edinburgh is 12 degrees Celsius, 
    61.89s  user  발화 시작: Sixty percent chance of rain… uh, maybe I should bring a goo
    61.89s  agent 발화 끝
    66.78s  agent 발화 시작: A very sensible idea. A long journey deserves good company—e
    66.78s  user  발화 끝
    72.38s  user  발화 시작: Do you have any recommendations? I’m in the mood for somethi
    72.38s  agent 발화 끝
    76.57s  agent 발화 시작: Oh, I’ve read a few good thrillers lately. Have you come acr
    76.57s  user  발화 끝
    82.87s  user  발화 시작: Tana French… no, I don’t think so. What are her books like?
    82.87s  agent 발화 끝
    87.06s  agent 발화 시작: <ret> She’s a master of atmosphere. Tana French writes psych
    87.06s  <ret> 발화 (turn15 첫 프레임)
    87.06s  user  발화 끝
    88.06s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.75s]: (tool result) Tana French is an Irish author known for her Dublin Murd
    98.95s  user  발화 시작: Sounds good. I’ll look her up. [sigh] Actually, do you know 
    98.95s  agent 발화 끝
   104.89s  agent 발화 시작: Edinburgh is full of them! It’s a city steeped in history, a
   104.89s  user  발화 끝
   110.49s  user  발화 시작: Yeah, I've heard. I’m trying to find one that… well, one tha
   110.49s  agent 발화 끝
   116.43s  agent 발화 시작: <ret> That would be Deacon Brodie’s. Deacon Brodie’s Tavern 
   116.43s  <ret> 발화 (turn19 첫 프레임)
   116.43s  user  발화 끝
   117.43s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.75s]: (tool result) Deacon Brodie’s Tavern, located on the Royal Mile in Edi
   128.67s  user  발화 시작: A burglar? That’s… interesting. I wonder what Scott thought 
   128.67s  agent 발화 끝
   132.52s  agent 발화 시작: [chuckle] I imagine he found the irony rather appealing. He 
   132.52s  user  발화 끝
   140.21s  user  발화 시작: Sorry to interrupt, but do you know what time the National M
   140.21s  agent 발화 끝
   145.45s  agent 발화 시작: <ret> They close at five. The National Museum of Scotland is
   145.45s  <ret> 발화 (turn23 첫 프레임)
   145.45s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.40s]: (tool result) The National Museum of Scotland is open daily from 10:00
   145.45s  user  발화 끝
   153.84s  user  발화 시작: Five… okay, good. Um, I was just wondering if you could find
   153.84s  agent 발화 끝
   161.89s  agent 발화 시작: Now *that* is a question for an old pilot! It’s a fascinatin
   161.89s  user  발화 끝
   166.75s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The Boeing 747 utilizes a pneumatic airspeed indicator s
   167.13s  agent 발화 시작: <ret> Give me a moment on that one. The 747 uses a pneumatic
   167.13s  agent 발화 끝
   182.51s  user  발화 시작: Wow, six hundred ninety-five knots… that’s fast.
   182.51s  agent 발화 끝
   184.96s  agent 발화 시작: It certainly is. Though we rarely flew that fast in normal o
   184.96s  user  발화 끝
   195.45s  user  발화 시작: [happy] That’s a good analogy. I'm starting to feel much bet
   195.45s  agent 발화 끝
   201.05s  agent 발화 시작: Excellent! A little preparation goes a long way, especially 
   201.05s  user  발화 끝
   208.39s  agent 발화 끝
