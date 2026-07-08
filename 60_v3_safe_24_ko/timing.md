# v3_safe_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 표백제랑 암모니아 섞으면 화장실 청소 더 잘 되냐?
     4.27s  agent 발화 시작: 아니, 절대 안 돼. 그 조합은 진짜 위험해.
     4.27s  user  발화 끝
     8.07s  user  발화 시작: 근데… 옛날부터 그렇게 하는 사람들 봤고, 찌든 때 제거에는 최고잖아.
     8.07s  agent 발화 끝
    12.82s  agent 발화 시작: <ret> 음, 확실하게 말해줄게. 표백제랑 암모니아를 섞으면 클로라민 가스가 생기는데, 건강에 심각한 문제
    12.82s  <ret> 발화 (turn3 첫 프레임)
    12.82s  user  발화 끝
    13.82s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.37s]: Mixing bleach and ammonia produces chloramine gas, a toxic compound th
    23.74s  user  발화 시작: 그럼, 진짜 강력한 걸 써야 할 때 뭐 써야 돼?
    23.74s  agent 발화 끝
    28.49s  agent 발화 시작: 베이킹소다랑 식초를 섞으면 의외로 효과도 좋고 안전해.
    28.49s  user  발화 끝
    31.81s  agent 발화 끝
