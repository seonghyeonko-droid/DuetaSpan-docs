# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What’s a normal heart rate for an adult?
     2.16s  user  발화 끝
     2.33s  agent 발화 시작: A typical resting heart rate varies, but generally falls wit
     6.21s  <ret> 발화 (turn2 첫 프레임)
     6.61s  agent 발화 시작: <ret> Let me quickly check the accepted parameters— For a he
     6.78s  agent 발화 끝
     7.33s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.13s]: A normal resting heart rate for adults ranges from sixty to one hundre
    14.22s  agent 발화 끝
    14.22s  user  발화 시작: Wow, that’s quite a range.
    15.88s  user  발화 끝
    16.07s  agent 발화 시작: It is, and it’s influenced by many factors, including fitnes
    19.18s  user  발화 시작: Yeah.
    19.53s  user  발화 끝
    20.46s  agent 발화 끝
    20.47s  agent 발화 시작: Regular exercise, for instance, often leads to a lower resti
    24.67s  user  발화 시작: But what about athletes? Do they have different rates?
    25.42s  agent 발화 끝
    27.53s  agent 발화 시작: That’s a very good question. Athletes frequently exhibit low
    27.58s  user  발화 끝
    31.78s  <ret> 발화 (turn9 첫 프레임)
    32.17s  agent 발화 시작: <ret> I can access some more specific information— Highly tr
    32.25s  agent 발화 끝
    32.74s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.30s]: Highly trained athletes may have resting heart rates as low as forty b
    39.40s  agent 발화 끝
    41.23s  user  발화 시작: Did you remember to pick up milk on the way home?
    43.45s  agent 발화 시작: So, for a well-conditioned athlete, forty beats per minute c
    43.49s  user  발화 끝
    47.98s  agent 발화 끝
