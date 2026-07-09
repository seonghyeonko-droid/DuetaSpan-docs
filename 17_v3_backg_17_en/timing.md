# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate, genera | S2 Oh, wow, that’s a pretty wide rang | S3 Did you remember to take the trash | S4 So, below sixty is okay, even? As 

     0.00s  user  발화 시작: What’s a normal heart rate, generally?
     1.79s  <ret> 발화 (turn1 첫 프레임)
     2.19s  agent 발화 시작: <ret> That’s a common question, and— For most adults, a norm
     2.40s  user  발화 끝
     3.31s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.75s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     9.88s  agent 발화 끝
    10.23s  user  발화 시작: Oh, wow, that’s a pretty wide range. Is there a “good” numbe
    14.45s  agent 발화 시작: It truly is a fairly broad spectrum, isn’t it? A lower rate 
    14.48s  user  발화 끝
    17.75s  user  발화 시작: Yeah, yeah.
    19.27s  user  발화 끝
    20.67s  <ret> 발화 (turn5 첫 프레임)
    20.91s  agent 발화 시작: <ret> Interestingly— A healthy heart rate is typically consi
    20.99s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.32s]: A healthy heart rate is generally between 50 and 90 beats per minute.
    21.08s  agent 발화 끝
    25.91s  user  발화 시작: Did you remember to take the trash out?
    26.37s  agent 발화 끝
    28.01s  user  발화 시작: So, below sixty is okay, even? As long as it’s above fifty?
    28.02s  user  발화 끝
    32.82s  user  발화 끝
