# v3_to_ot_14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Where is the women’s rugby world cup played?
     3.72s  <ret> 발화 (turn1 첫 프레임)
     4.12s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.10s]: Dublin, Ireland.
     4.32s  agent 발화 시작: <ret> That’s a great question. The Women’s Rugby World Cup i
     4.49s  user  발화 끝
     8.16s  agent 발화 끝
     8.97s  user  발화 시작: Oh, Dublin! I’ve always wanted to visit. Is it expensive the
    15.56s  agent 발화 시작: It can be, depending on your tastes, of course.
    15.73s  user  발화 끝
    23.99s  agent 발화 끝
    24.01s  user  발화 시작: Do they have good bakeries? I— I mean, are there any famous 
    28.05s  <ret> 발화 (turn5 첫 프레임)
    28.65s  agent 발화 시작: <ret> Ireland has a lovely culinary scene. The Queen of Tart
    28.72s  user  발화 끝
    29.05s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.90s]: The Queen of Tarts is a well-known bakery in Dublin, Ireland.
    34.20s  user  발화 시작: The Queen of Tarts… that sounds promising. What kind of cake
    34.35s  agent 발화 끝
    38.13s  user  발화 끝
    38.16s  agent 발화 시작: They have a wide selection, I understand.
    46.52s  user  발화 시작: My friend just texted… oh, sorry. She's having trouble with 
    46.68s  agent 발화 끝
    50.87s  user  발화 끝
    50.92s  user  발화 시작: It's the starter motor again, I think.
    58.66s  user  발화 끝
    58.77s  user  발화 시작: Anyway, back to the cakes. What’s the weather like in Dublin
    60.27s  <ret> 발화 (turn11 첫 프레임)
    60.86s  agent 발화 시작: <ret> October can be quite changeable. Dublin’s average high
    60.98s  user  발화 끝
    61.27s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.62s]: Dublin in October typically experiences average high temperatures of 1
    65.66s  user  발화 시작: Fourteen degrees… that's cool. [sigh] I should pack a coat.
    65.71s  agent 발화 끝
    71.05s  agent 발화 시작: Definitely a sensible idea, yes.
    71.26s  user  발화 끝
    75.54s  agent 발화 끝
    76.35s  user  발화 시작: What about the rugby itself? Who’s favored to win this year?
    83.20s  <ret> 발화 (turn15 첫 프레임)
    83.79s  agent 발화 시작: <ret> Several teams are looking strong. New Zealand’s Black 
    84.00s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.20s]: New Zealand’s Black Ferns are the current Rugby World Cup champions.
    84.05s  user  발화 끝
    87.14s  user  발화 시작: New Zealand, huh? They're always good at rugby. Is there any
    87.63s  agent 발화 끝
    93.35s  user  발화 끝
    93.54s  agent 발화 시작: Dublin is a city rich in history and culture.
    98.07s  agent 발화 끝
    98.90s  user  발화 시작: What kind of historical sites are there?
   104.12s  <ret> 발화 (turn19 첫 프레임)
   104.44s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.93s]: Dublin Castle has been a significant site in Irish history since the t
   104.72s  agent 발화 시작: <ret> Many, actually. Dublin Castle has been a significant s
   104.92s  user  발화 끝
   112.14s  agent 발화 끝
