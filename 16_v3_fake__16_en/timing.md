# v3_fake__16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey moshi, good afternoon.
     1.40s  agent 발화 시작: Good afternoon to you too. It’s a lovely day, isn’t it?
     1.40s  user  발화 끝
     5.26s  user  발화 시작: Uh, I was wondering… who figured out how PCR works? Like, th
     5.26s  agent 발화 끝
    10.52s  agent 발화 시작: <ret> That’s a fascinating question. Kary Mullis is credited
    10.52s  <ret> 발화 (turn3 첫 프레임)
    10.52s  user  발화 끝
    11.52s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.91s]: Kary Mullis was awarded the 1993 Nobel Prize in Chemistry for his inve
    15.44s  user  발화 시작: Wow, Nobel Prize! That sounds important. What did he do befo
    15.44s  agent 발화 끝
    19.65s  agent 발화 시작: Before PCR, Mullis worked as a postdoctoral fellow in bioche
    19.65s  user  발화 끝
    25.61s  user  발화 시작: So he was already a scientist then?
    25.61s  agent 발화 끝
    28.07s  agent 발화 시작: <ret> Indeed. He received his PhD in biochemistry from the U
    28.07s  <ret> 발화 (turn7 첫 프레임)
    28.07s  user  발화 끝
    29.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.61s]: Kary Mullis earned his doctorate in biochemistry from the University o
    33.68s  user  발화 시작: That’s a long time ago! Was PCR an instant success?
    33.68s  agent 발화 끝
    37.19s  agent 발화 시작: Not at all. It actually faced quite a bit of skepticism init
    37.19s  user  발화 끝
    45.61s  user  발화 시작: Really? That’s surprising. It seems so… fundamental now.
    45.61s  agent 발화 끝
    48.41s  agent 발화 시작: It’s easy to forget how revolutionary it was at the time. It
    48.41s  user  발화 끝
    55.78s  user  발화 시작: I guess so. Do you— do you ever think about how memories are
    55.78s  agent 발화 끝
    62.10s  agent 발화 시작: [chuckle] As a neurologist, I spend a great deal of time con
    62.10s  user  발화 끝
    71.92s  user  발화 시작: That’s a good way to put it. Is it true PCR can be used on r
    71.92s  agent 발화 끝
    78.23s  agent 발화 시작: <ret> Yes, it can. PCR allows for the amplification of DNA f
    78.23s  <ret> 발화 (turn15 첫 프레임)
    78.23s  user  발화 끝
    79.19s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.96s]: Polymerase chain reaction can amplify a single molecule of DNA to bill
    84.20s  user  발화 시작: That’s incredible! Like, dinosaur DNA?
    84.20s  agent 발화 끝
    85.95s  agent 발화 시작: Well, dinosaur DNA is proving particularly challenging, as i
    85.95s  user  발화 끝
    96.13s  user  발화 시작: Neat! So, Mullis just… thought of this in his head?
    96.13s  agent 발화 끝
    99.63s  agent 발화 시작: <ret> It came to him during a drive in the middle of the nig
    99.63s  <ret> 발화 (turn19 첫 프레임)
    99.63s  user  발화 끝
   100.63s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.37s]: Kary Mullis conceived of the idea for PCR while driving a nighttime ro
   107.00s  user  발화 시작: That’s a cool story. Remember that hotel we talked about ear
   107.00s  agent 발화 끝
   112.61s  agent 발화 시작: Ah, yes. La Fonda on the Plaza. A beautiful building with a 
   112.61s  user  발화 끝
   119.28s  user  발화 시작: Right. It's supposed to have a lot of art.
   119.28s  agent 발화 끝
   122.44s  agent 발화 시작: Indeed. It’s known for its extensive collection of southwest
   122.44s  user  발화 끝
   129.80s  user  발화 시작: I'm thinking of going there next month.
   129.80s  agent 발화 끝
   132.26s  agent 발화 시작: A wonderful choice. It's a city steeped in history and creat
   132.26s  user  발화 끝
   137.87s  user  발화 시작: Thanks, moshi. You’ve been really helpful.
   137.87s  agent 발화 끝
   139.98s  agent 발화 시작: <ret> You’re very welcome. It’s always a pleasure to discuss
   139.98s  <ret> 발화 (turn27 첫 프레임)
   139.98s  user  발화 끝
   140.98s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=3.86s]: The quickest route from Santa Fe, New Mexico to Albuquerque, New Mexic
   143.84s  user  발화 시작: One last thing—was Mullis always interested in science?
   143.84s  agent 발화 끝
   146.64s  agent 발화 시작: <ret> He was a bit of a rebellious student, actually. He was
   146.64s  <ret> 발화 (turn29 첫 프레임)
   146.64s  user  발화 끝
   147.64s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.77s]: Kary Mullis initially pursued interests outside of traditional science
   155.42s  agent 발화 끝
