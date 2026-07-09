# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering, when is Demi Lovato’s new album coming
     6.35s  <ret> 발화 (turn1 첫 프레임)
     6.59s  agent 발화 시작: <ret> Oh, you’re asking about Demi Lovato’s latest release—t
     6.63s  user  발화 끝
     8.03s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.02s]: Demi Lovato’s album, “Confident”, was released in October 2015.
    10.52s  agent 발화 시작: Her album, “Confident”, actually came out in October of twen
    10.61s  agent 발화 끝
    13.28s  user  발화 시작: Yeah.
    13.78s  user  발화 끝
    14.35s  agent 발화 끝
    14.74s  user  발화 시작: Twenty fifteen? Wow, that feels like ages ago! Is she workin
    20.76s  agent 발화 시작: It does seem like a while, doesn’t it? Musicians are always 
    20.89s  user  발화 끝
    24.00s  agent 발화 끝
    26.01s  user  발화 시작: I’m just really eager to hear something new. Are there any d
    32.13s  user  발화 끝
    32.23s  <ret> 발화 (turn7 첫 프레임)
    32.31s  agent 발화 시작: <ret> Let me check for current information regarding Demi Lo
    33.91s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.27s]: (tool result) AAPL: 170.34 USD +0.45 (0.26%)
    36.76s  user  발화 시작: Yeah.
    37.26s  user  발화 끝
    39.92s  user  발화 시작: That’s a shame. I guess I’ll just have to keep an eye out fo
    40.05s  agent 발화 끝
    43.92s  agent 발화 시작: It's always best to stay tuned to official channels, you'll 
    43.95s  user  발화 끝
    45.47s  user  발화 시작: Yeah.
    46.11s  user  발화 끝
    47.57s  user  발화 시작: What about her older stuff, though? Any recommendations?
    47.71s  agent 발화 끝
    50.70s  <ret> 발화 (turn13 첫 프레임)
    50.94s  agent 발화 시작: <ret> Oh, excellent question!
    51.03s  user  발화 끝
    52.06s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.75s]: Demi Lovato’s debut album, “Don’t Forget”, was released in September 2
    52.64s  agent 발화 시작: If you enjoy her earlier work, “Don’t Forget” came out in Se
    52.69s  agent 발화 끝
    54.26s  user  발화 시작: Okay.
    54.98s  user  발화 끝
    57.45s  agent 발화 끝
    58.80s  user  발화 시작: Oh, I remember that one! I haven’t listened to it in ages.
    62.51s  user  발화 끝
    62.70s  agent 발화 시작: It's fun revisiting old favorites sometimes—it's like starga
    67.98s  agent 발화 끝
    68.97s  user  발화 시작: You're an astronomer, right? Do you ever look for patterns i
    74.16s  user  발화 끝
    74.59s  agent 발화 시작: [laugh] That's a clever thought! I do sometimes see parallel
    78.39s  user  발화 시작: Yeah.
    79.02s  user  발화 끝
    80.93s  user  발화 시작: That’s really interesting. So, back to the albums, anything 
    81.31s  agent 발화 끝
    85.82s  agent 발화 시작: Before “Don’t Forget”, Demi Lovato was primarily known for h
    85.93s  user  발화 끝
    91.94s  agent 발화 끝
