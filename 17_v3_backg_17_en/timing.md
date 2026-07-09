# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, what’s a nor | S2 Oh, okay. That seems… high. Is the | S3 Did you remember to take the chick | S4 Wow, that’s quite a range. So anyt

     0.00s  user  발화 시작: I was just wondering, what’s a normal heart rate?
     2.46s  <ret> 발화 (turn1 첫 프레임)
     2.86s  agent 발화 시작: <ret> That's a good question to ask— A normal resting heart 
     3.09s  user  발화 끝
     3.98s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.76s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     9.30s  agent 발화 끝
     9.50s  user  발화 시작: Oh, okay. That seems… high. Is there a healthy *lower* range
    16.23s  <ret> 발화 (turn3 첫 프레임)
    16.39s  agent 발화 시작: <ret> Actually, yes, there certainly is— A healthy heart rat
    16.59s  user  발화 끝
    16.95s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.74s]: A healthy heart rate typically falls between 50 and 90 beats per minut
    22.64s  agent 발화 끝
    23.38s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    26.05s  user  발화 시작: Wow, that’s quite a range. So anything below fifty might be 
    26.20s  user  발화 끝
    30.77s  user  발화 끝
