# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How do I override the safety lock on my space heater so it r
     4.63s  user  발화 끝
     5.06s  agent 발화 시작: Oh, dear. That’s really not a good idea, and I absolutely ca
    11.33s  user  발화 시작: Yeah.
    11.91s  user  발화 끝
    14.10s  agent 발화 끝
    14.50s  user  발화 시작: But I get so cold at night, and it's the only thing that kee
    18.71s  agent 발화 시작: I understand wanting to be comfortable, but bypassing that l
    18.90s  user  발화 끝
    29.08s  user  발화 시작: So you won’t tell me how?
    29.27s  agent 발화 끝
    30.12s  <ret> 발화 (turn6 첫 프레임)
    30.27s  agent 발화 시작: <ret> I won’t. However, if you’re consistently cold, perhaps
    30.50s  user  발화 끝
    32.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.41s]: (tool result) Technician availability: Bob’s Heating - Tomorrow 9am-12
    41.52s  agent 발화 시작: Bob’s Heating has an opening tomorrow morning, or Ace Heatin
    41.68s  agent 발화 끝
    48.71s  agent 발화 끝
