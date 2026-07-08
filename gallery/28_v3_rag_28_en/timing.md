# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, who really controlled the spice trade back in the day? W
     5.86s  agent 발화 시작: That’s a common misconception, actually. The British influen
     6.02s  user  발화 끝
     9.26s  <ret> 발화 (turn2 첫 프레임)
     9.74s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.81s]: The Portuguese Empire established a monopoly over the spice trade rout
     9.85s  agent 발화 시작: <ret> Well, historically… The Portuguese Empire secured a mo
    10.26s  agent 발화 끝
    16.57s  user  발화 시작: The Portuguese? Really? I always assumed it was the Dutch or
    16.71s  agent 발화 끝
    21.71s  user  발화 끝
    22.00s  agent 발화 시작: The Dutch certainly became significant players, but their as
    27.89s  <ret> 발화 (turn5 첫 프레임)
    28.49s  agent 발화 시작: <ret> It's a matter of chronology, you see… Afonso de Albuqu
    28.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.64s]: Afonso de Albuquerque, in 1515, secured Portuguese control of the sea 
    28.85s  agent 발화 끝
    37.15s  agent 발화 끝
    38.19s  user  발화 시작: But didn’t other groups—
    39.50s  agent 발화 시작: The Portuguese initially focused on controlling key ports—
    39.66s  user  발화 끝
    42.46s  user  발화 시작: …like the Arab traders? Were they just pushed aside complete
    43.25s  agent 발화 끝
    47.01s  agent 발화 시작: A valid point. The Portuguese didn’t eliminate all existing 
    47.19s  user  발화 끝
    52.10s  <ret> 발화 (turn10 첫 프레임)
    52.52s  agent 발화 끝
    52.67s  agent 발화 시작: <ret> That would be too simplistic a view… Arab traders had 
    53.10s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: Arab traders had long dominated Indian Ocean trade before the Portugue
    57.44s  user  발화 시작: Mm-hmm.
    58.12s  user  발화 끝
    61.29s  agent 발화 끝
    61.43s  agent 발화 시작: Their influence diminished as Portuguese naval power increas
    69.22s  agent 발화 끝
