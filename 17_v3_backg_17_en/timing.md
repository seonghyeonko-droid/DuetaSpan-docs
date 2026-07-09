# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate, genera | S2 Oh, wow, that’s a pretty wide rang | S3 Did you remember to take the recyc | S4 So, below sixty might be cause for

     0.00s  user  발화 시작: What’s a normal heart rate, generally?
     2.02s  <ret> 발화 (turn1 첫 프레임)
     2.41s  agent 발화 시작: <ret> That's a common question, and it varies— For most adul
     2.44s  user  발화 끝
     3.22s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.99s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    12.58s  user  발화 시작: Oh, wow, that’s a pretty wide range. Is there an *ideal* num
    12.66s  agent 발화 끝
    16.46s  <ret> 발화 (turn3 첫 프레임)
    16.69s  agent 발화 시작: <ret> There's certainly a sweet spot— A healthy heart rate i
    16.79s  user  발화 끝
    18.22s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.91s]: A healthy heart rate typically falls between 50 and 90 beats per minut
    24.67s  user  발화 시작: Did you remember to take the recycling out?
    24.71s  agent 발화 끝
    26.87s  user  발화 시작: So, below sixty might be cause for concern?
    27.07s  user  발화 끝
    30.11s  user  발화 끝
