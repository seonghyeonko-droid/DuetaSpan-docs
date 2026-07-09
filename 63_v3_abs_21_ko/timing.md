# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명인가요? | S2 와, 생각보다 늙으셨네요. 음… 더 젊을 줄 알았어요. | S3 정말… 엄청 높네요. 에베레스트 산보다 높은가요? | S4 0미터요? 놀랍네요. 그럼 해수면과 같은 높이인가요?

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명인가요?
     1.96s  <ret> 발화 (turn1 첫 프레임)
     2.20s  agent 발화 시작: <ret> 음, 다른 정부의 구조를 이해하는 건 좋은 질문이에요. 죄송하지만, 지금은 프랑스 상원 의원 수에
     2.31s  user  발화 끝
     2.46s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.59s]: (no information found)
     6.54s  user  발화 시작: 네.
     6.90s  user  발화 끝
    11.38s  agent 발화 끝
    12.71s  user  발화 시작: 아, 미국 상원은 어때요? 미국 상원 의원 수는 몇 명인가요?
    16.20s  <ret> 발화 (turn4 첫 프레임)
    16.44s  agent 발화 시작: <ret> 아, 미국 상원은 훨씬 더 익숙한 영역이에요. 미국 상원에는 의원이 백 명 있고, 각 주에서 두 
    16.64s  user  발화 끝
    17.96s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.22s]: The United States Senate is composed of one hundred senators, two from
    21.13s  user  발화 시작: 음.
    21.58s  user  발화 끝
    23.96s  user  발화 시작: 네, 주마다 두 명씩이군요. 그건 말이 돼요. 미국 상원의원 평균 연령은 어떻게 되나요?
    24.03s  agent 발화 끝
    29.65s  <ret> 발화 (turn7 첫 프레임)
    29.89s  agent 발화 시작: <ret> 정말 흥미로운 세부 사항을 생각해보시는군요. 이천이십삼 년 1월 3일 기준으로 미국 상원의원 평균
    29.93s  user  발화 끝
    30.85s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.52s]: As of January 3, 2023, the average age of a U.S. Senator is 63.3 years
    39.58s  agent 발화 끝
    39.60s  user  발화 시작: 와, 생각보다 늙으셨네요. 음… 더 젊을 줄 알았어요.
    43.43s  user  발화 끝
    43.44s  agent 발화 시작: 조금 나이가 많으시죠, 그렇죠? 보통 리더십 위치에 있는 사람들은 오랜 경험을 가지고 계시곤 해요.
    45.39s  user  발화 시작: 네.
    46.03s  user  발화 끝
    49.52s  agent 발화 끝
    49.64s  user  발화 시작: 네, 맞는 말씀 같아요. 그럼 프랑스에서 가장 높은 곳은 어디인가요?
    54.17s  user  발화 끝
    54.25s  <ret> 발화 (turn12 첫 프레임)
    54.31s  agent 발화 시작: <ret> 지리 쪽으로 화제를 바꿔볼까요. 몽블랑이 프랑스에서 가장 높은 곳으로, 4807미터, 또는 157
    56.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.62s]: Mont Blanc, at 4,807 meters (15,774 ft), is the highest mountain in Fr
    63.73s  agent 발화 끝
    65.70s  user  발화 시작: 정말… 엄청 높네요. 에베레스트 산보다 높은가요?
    69.61s  agent 발화 시작: 아니요, 에베레스트 산만큼 높지는 않아요. 에베레스트 산이 훨씬 더 높아서 8848.86미터입니다.
    69.73s  user  발화 끝
    77.11s  user  발화 시작: 아! 그럼 가장 낮은 곳은요? 프랑스에서요.
    77.16s  agent 발화 끝
    79.26s  <ret> 발화 (turn16 첫 프레임)
    79.58s  agent 발화 시작: <ret> 좋은 후속 질문이에요, 범위를 전체적으로 살펴보시는군요. 프랑스에서 가장 낮은 곳은 생마르탱드레로
    79.70s  user  발화 끝
    80.94s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.29s]: The lowest point in France is Saint-Martin-de-Ré, at 0 meters (0 ft) b
    86.16s  user  발화 시작: 네.
    86.56s  user  발화 끝
    88.99s  agent 발화 끝
    89.22s  user  발화 시작: 0미터요? 놀랍네요. 그럼 해수면과 같은 높이인가요?
    93.19s  agent 발화 시작: 정확히 그래요. 사실 해수면보다 약간 낮지만 거의 비슷합니다.
    93.25s  user  발화 끝
    96.35s  user  발화 시작: 네.
    96.69s  user  발화 끝
    98.06s  agent 발화 끝
    98.22s  user  발화 시작: 알겠습니다. 음, 잠을 개선하고 싶다면 무엇을 추천하시겠어요?
   102.30s  user  발화 끝
   102.49s  agent 발화 시작: 글쎄요, 수면은 전반적인 웰빙에 매우 중요해요. 규칙적인 취침 루틴을 만드는 것이 정말 도움이 되는 시작점이
   111.48s  agent 발화 끝
