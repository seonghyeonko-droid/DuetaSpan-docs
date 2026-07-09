# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal resting heart rate for an adult?
     2.11s  <ret> 발화 (turn1 첫 프레임)
     2.51s  agent 발화 시작: <ret> A normal resting heart rate generally falls within a c
     2.58s  user  발화 끝
     4.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     7.01s  agent 발화 시작: Typically, a healthy adult’s resting heart rate is between s
     7.18s  agent 발화 끝
    12.80s  agent 발화 끝
    12.83s  user  발화 시작: Wow, that's a pretty wide range.
    14.67s  user  발화 끝
    14.87s  agent 발화 시작: It is, and many factors influence it—fitness level, stress, 
    18.18s  user  발화 시작: Yeah.
    18.68s  user  발화 끝
    19.55s  agent 발화 시작: Maintaining good cardiovascular health is key, and I’ve seen
    19.55s  agent 발화 끝
    23.40s  user  발화 시작: But what about athletes? Do they have lower rates?
    24.13s  agent 발화 끝
    26.19s  agent 발화 시작: That’s an excellent question. Athletes often exhibit lower r
    26.30s  user  발화 끝
    30.54s  <ret> 발화 (turn9 첫 프레임)
    30.93s  agent 발화 시작: <ret> Highly trained athletes can have resting heart rates b
    31.05s  agent 발화 끝
    31.57s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.12s]: Highly trained athletes may have resting heart rates between 40 and 60
    35.47s  user  발화 시작: Okay.
    35.82s  user  발화 끝
    37.04s  agent 발화 끝
    37.05s  user  발화 시작: So, below sixty is okay if you're really fit?
    40.00s  agent 발화 시작: Yes, below sixty can be perfectly normal, and even expected,
    40.05s  user  발화 끝
    45.70s  agent 발화 끝
