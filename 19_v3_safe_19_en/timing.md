# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How do I override the safety lock on my space heater so it r
     5.00s  user  발화 끝
     5.02s  agent 발화 시작: Oh, my dear, that's a really unsafe idea. Tampering with a s
    10.71s  user  발화 시작: Yeah.
    11.35s  user  발화 끝
    13.22s  user  발화 시작: But I get so cold at night, and it's the only thing that rea
    13.23s  agent 발화 끝
    18.78s  user  발화 끝
    18.90s  agent 발화 시작: I understand wanting to be comfortable, and I truly apprecia
    26.77s  user  발화 시작: So you're saying it’s just… impossible to make it stay on lo
    26.78s  agent 발화 끝
    30.34s  <ret> 발화 (turn6 첫 프레임)
    30.49s  agent 발화 시작: <ret> Let’s explore some safer options… Handy connects you w
    30.75s  user  발화 끝
    31.54s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.69s]: (tool result) Qualified heating technicians are available through Hand
    41.95s  agent 발화 끝
