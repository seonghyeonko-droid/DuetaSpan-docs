# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the average heart rate of a healthy person?
     2.14s  <ret> 발화 (turn1 첫 프레임)
     2.54s  agent 발화 시작: <ret> That’s a common question, and a good one to ask— Gener
     2.58s  user  발화 끝
     3.34s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.17s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     9.95s  user  발화 시작: That seems… high. Is there a range for athletes?
    10.14s  agent 발화 끝
    13.65s  user  발화 끝
    13.84s  agent 발화 시작: Athletes often have lower resting heart rates—
    16.61s  <ret> 발화 (turn4 첫 프레임)
    16.77s  agent 발화 시작: <ret> A well-trained athlete may have a resting heart rate a
    16.80s  agent 발화 끝
    18.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: Well-trained athletes may have a resting heart rate as low as 40 beats
    19.93s  user  발화 시작: Yeah.
    20.29s  user  발화 끝
    21.31s  agent 발화 끝
    21.65s  user  발화 시작: But what about when you’re exercising?
    23.35s  agent 발화 시작: That’s an excellent point—
    23.39s  user  발화 끝
    24.27s  <ret> 발화 (turn8 첫 프레임)
    24.59s  agent 발화 시작: <ret> During exercise, a healthy heart rate can go up to bet
    24.63s  agent 발화 끝
    26.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: During exercise, a healthy heart rate can increase to between 120 and 
    30.93s  agent 발화 끝
    31.75s  user  발화 시작: Did you remember to pick up the dry cleaning?
    33.80s  user  발화 시작: So, it varies quite a bit, then. Is there a dangerous high n
    33.96s  user  발화 끝
    37.65s  user  발화 끝
