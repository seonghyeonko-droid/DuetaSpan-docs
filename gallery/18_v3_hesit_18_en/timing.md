# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Uh, what’s the, um, the youngest age someone can be to join 
     4.99s  <ret> 발화 (turn1 첫 프레임)
     5.22s  agent 발화 시작: <ret> That’s a good question regarding civic participation. 
     5.46s  user  발화 끝
     6.83s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.08s]: The minimum age to become a member of a legislative council is thirty 
    14.03s  agent 발화 끝
    15.44s  user  발화 시작: Wow, thirty. That’s… pretty high, isn’t it?
    19.00s  user  발화 끝
    19.14s  agent 발화 시작: It is a bit of a higher bar, yes. It allows for some life ex
    27.30s  agent 발화 끝
    28.28s  user  발화 시작: Right. But— but is that the same everywhere? Like, in every 
    31.58s  <ret> 발화 (turn5 첫 프레임)
    31.66s  agent 발화 시작: <ret> That’s a very sensible follow-up question, actually. W
    31.75s  user  발화 끝
    33.02s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.26s]: Age requirements for legislative council membership vary by jurisdicti
    41.91s  agent 발화 끝
