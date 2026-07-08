# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, who’s won more games, the Eagles or the Cowboys? It feel
     4.58s  <ret> 발화 (turn1 첫 프레임)
     4.98s  agent 발화 시작: <ret> That’s a common question among football fans— The Cowb
     5.00s  user  발화 끝
     5.62s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.28s]: The Dallas Cowboys have won 738 regular season games, while the Philad
    13.28s  user  발화 시작: Wow, that’s a pretty big difference! More than a hundred gam
    13.46s  agent 발화 끝
    17.12s  user  발화 끝
    17.34s  agent 발화 시작: It is a significant margin, yes. Their rivalry is still very
    25.04s  agent 발화 끝
    25.66s  user  발화 시작: Did you remember to pick up milk on the way home?
    28.07s  user  발화 시작: Are the Cowboys ahead in playoff games too, or is that diffe
    28.19s  user  발화 끝
    31.63s  user  발화 끝
