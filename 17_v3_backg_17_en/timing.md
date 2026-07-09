# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate for som | S2 Oh, that’s… higher than I thought. | S3 Did you remember to take the recyc | S4 So, under sixty is okay for an ath

     0.00s  user  발화 시작: What’s a normal heart rate for someone healthy?
     2.41s  <ret> 발화 (turn1 첫 프레임)
     2.80s  agent 발화 시작: <ret> That’s a really good question— A normal resting heart 
     3.00s  user  발화 끝
     3.93s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.52s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     9.20s  agent 발화 끝
     9.42s  user  발화 시작: Oh, that’s… higher than I thought. Is there a range for athl
    14.16s  agent 발화 시작: Absolutely. Athletes often have lower resting heart rates—
    14.22s  user  발화 끝
    17.68s  <ret> 발화 (turn4 첫 프레임)
    17.92s  agent 발화 시작: <ret> Well-trained athletes may have a resting heart rate be
    18.09s  agent 발화 끝
    19.52s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.00s]: Well-trained athletes may have a resting heart rate between 40 and 60 
    22.79s  user  발화 시작: Did you remember to take the recycling out?
    22.92s  agent 발화 끝
    25.06s  user  발화 시작: So, under sixty is okay for an athlete, but what about a reg
    25.19s  user  발화 끝
    29.87s  user  발화 끝
    29.91s  agent 발화 시작: For a regular person, a heart rate between fifty and ninety 
    35.28s  agent 발화 끝
