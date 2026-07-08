# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who played the guitar solo on Michael Jackson’s 
     4.64s  <ret> 발화 (turn1 첫 프레임)
     4.87s  agent 발화 시작: <ret> That is a frequently asked question, actually. Eddie V
     5.00s  user  발화 끝
     6.00s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.49s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.45s  user  발화 시작: Wow, really? I thought it was someone else. That’s amazing.
    11.63s  agent 발화 끝
    15.05s  agent 발화 시작: It was a rather unusual collaboration for the time, bringing
    15.15s  user  발화 끝
    19.86s  agent 발화 끝
    19.89s  user  발화 시작: Hey, did you take the recycling out?
    22.08s  user  발화 시작: Sorry about that. Back to the song… was he paid a lot for it
    22.16s  user  발화 끝
    25.80s  <ret> 발화 (turn6 첫 프레임)
    26.19s  agent 발화 시작: <ret> Determining compensation can be complex. Initially, Ed
    26.29s  user  발화 끝
    27.64s  ⚡SPAN 주입 [d'=1.84s / d_lead=1.87s]: Eddie Van Halen did not receive royalties or credit on the original re
    35.55s  agent 발화 끝
