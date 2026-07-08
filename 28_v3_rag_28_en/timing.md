# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was re-reading Harry Potter last night…
     3.12s  agent 발화 시작: It’s a wonderful series, isn’t it? Such imaginative world-bu
     3.12s  user  발화 끝
     6.63s  user  발화 시작: Yeah, it really is. I was trying to remember… who actually t
     6.63s  agent 발화 끝
    12.86s  agent 발화 시작: <ret> That’s a good question. Hagrid is the one who delivers
    12.86s  <ret> 발화 (turn3 첫 프레임)
    12.86s  user  발화 끝
    13.82s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.56s]: Rubeus Hagrid is the first character to tell Harry Potter that he is a
    19.88s  user  발화 시작: Oh, right! Hagrid, of course. I always forget the details.
    19.88s  agent 발화 끝
    23.78s  agent 발화 시작: It’s easy to do with such a detailed story. The little momen
    23.78s  user  발화 끝
    29.63s  user  발화 시작: It is. And what does Hagrid do *after* he tells him?
    29.63s  agent 발화 끝
    33.92s  agent 발화 시작: <ret> He has quite a bit to explain. Hagrid then accompanies
    33.92s  <ret> 발화 (turn7 첫 프레임)
    33.92s  user  발화 끝
    34.88s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.73s]: Hagrid takes Harry to Diagon Alley to purchase school supplies and a w
    40.93s  user  발화 시작: Diagon Alley, yeah. It’s such a cool place. Um, is Hagrid a 
    40.93s  agent 발화 끝
    46.78s  agent 발화 시작: He’s not a teacher in the traditional sense, but he’s the ga
    46.78s  user  발화 끝
    54.19s  user  발화 시작: Right, Care of Magical Creatures. That class was always… int
    54.19s  agent 발화 끝
    58.09s  agent 발화 시작: [laugh] It certainly had its moments, didn’t it? A bit chaot
    58.09s  user  발화 끝
    63.15s  user  발화 시작: Definitely. So, Hagrid… what kind of creature is he, exactly
    63.15s  agent 발화 끝
    67.05s  agent 발화 시작: <ret> That's a common question. Hagrid’s mother was a witch,
    67.05s  <ret> 발화 (turn13 첫 프레임)
    67.05s  user  발화 끝
    68.05s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.56s]: Rubeus Hagrid is a half-giant, the son of a giant and a human witch.
    72.90s  user  발화 시작: A half-giant! I knew there was something different about him
    72.90s  agent 발화 끝
    77.97s  agent 발화 시작: He certainly stands out in a crowd. A very gentle soul, desp
    77.97s  user  발화 끝
    83.43s  user  발화 시작: He is. I wonder if he ever felt… different, growing up?
    83.43s  agent 발화 끝
    87.71s  agent 발화 시작: I imagine it must have been challenging, being different. Pa
    87.71s  user  발화 끝
    92.78s  user  발화 시작: Yeah, you're right. That must have been hard.
    92.78s  agent 발화 끝
    95.90s  agent 발화 시작: It’s a theme the books explore quite beautifully, actually— 
    95.90s  user  발화 끝
   100.58s  user  발화 시작: That’s true. It’s a really powerful message.
   100.58s  agent 발화 끝
   103.31s  user  발화 끝
