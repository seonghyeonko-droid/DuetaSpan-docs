# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, when did the government officially start taking care of 
     4.38s  agent 발화 시작: That’s a good question, and the answer is a bit complex, as 
     4.58s  user  발화 끝
     8.61s  <ret> 발화 (turn2 첫 프레임)
     9.01s  agent 발화 시작: <ret> Establishing a dedicated department— It was formally c
     9.20s  agent 발화 끝
     9.49s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.77s]: The United States Department of Veterans Affairs was created by Congre
    12.12s  user  발화 시작: Okay.
    13.04s  user  발화 끝
    14.64s  user  발화 시작: Nineteen thirty? That seems…late, doesn't it? Weren't there 
    14.75s  agent 발화 끝
    20.67s  user  발화 끝
    20.98s  agent 발화 시작: Indeed, there were earlier provisions, but nothing on this s
    25.21s  <ret> 발화 (turn6 첫 프레임)
    25.60s  agent 발화 시작: <ret> Prior to the department’s founding, support— Before ni
    25.70s  agent 발화 끝
    26.81s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.61s]: Before 1930, veterans’ benefits were primarily administered by the Bur
    34.31s  agent 발화 끝
    34.79s  user  발화 시작: But what kind of benefits *were* they getting back then, in 
    39.80s  agent 발화 시작: Ah, a very pertinent question—
    39.93s  user  발화 끝
    41.45s  <ret> 발화 (turn9 첫 프레임)
    41.84s  agent 발화 시작: <ret> Those early benefits largely included land grants and 
    42.02s  agent 발화 끝
    43.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: Early pension benefits primarily consisted of land grants and monetary
    47.81s  agent 발화 끝
