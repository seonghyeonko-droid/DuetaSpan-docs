# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심박수가 정상적으로 쉬고 있을 때 성인 기준으로는 어느 정도야?
     4.62s  <ret> 발화 (turn1 첫 프레임)
     4.86s  agent 발화 시작: <ret> 일반적으로 정상적인 심박수는 어느 정도 범위 안에 드는데, 조금씩 다르긴 해.
     5.00s  user  발화 끝
     6.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    10.65s  agent 발화 끝
    10.74s  agent 발화 시작: 보통 건강한 성인의 경우 심박수는 분당 육십 번에서 백 번 사이야.
    15.28s  agent 발화 끝
    15.35s  user  발화 시작: 와, 생각보다 범위가 넓네.
    17.55s  agent 발화 시작: 그렇지, 그리고 여러 가지 요인이 영향을 줘—운동 수준, 스트레스, 심지어 약물도.
    17.65s  user  발화 끝
    21.59s  user  발화 시작: 응.
    21.95s  user  발화 끝
    23.11s  agent 발화 끝
    23.21s  agent 발화 시작: 심혈관 건강을 잘 유지하는 게 중요하고, 내 일로 그런 걸 많이 봤어—
    27.44s  user  발화 시작: 근데 운동선수는? 심박수가 더 낮아?
    28.03s  agent 발화 끝
    30.26s  user  발화 끝
    30.38s  agent 발화 시작: 좋은 질문이야. 운동선수들은 보통 심박수가 더 낮게 나오거든—
    34.69s  <ret> 발화 (turn9 첫 프레임)
    34.84s  agent 발화 시작: <ret> 훈련된 운동선수들은 분당 사십 번에서 육십 번 사이의 심박수를 보이기도 해. 정말 놀랍지?
    34.91s  agent 발화 끝
    36.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Highly trained athletes may have resting heart rates between 40 and 60
    39.80s  user  발화 시작: 응.
    40.11s  user  발화 끝
    41.33s  agent 발화 끝
    41.87s  user  발화 시작: 그럼 운동을 엄청 열심히 하면 심박수가 육십 번 아래로 떨어져도 괜찮은 거야?
    46.00s  agent 발화 시작: 응, 육십 번 아래로 떨어지는 건 신체적으로 건강한 사람들에게는 완전히 정상이고, 오히려 예상되는 일이야.
    46.11s  user  발화 끝
    53.05s  agent 발화 끝
