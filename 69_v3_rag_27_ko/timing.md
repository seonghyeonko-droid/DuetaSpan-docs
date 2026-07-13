# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "예안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 가로 씨. 요즘 친구 때문에 좀 힘든 일이 있었어 | S2 아, 그렇군요. 그럼 얼마나 자주 연락해야 할까요? | S3 음… 그럼 친구가 저에게 먼저 연락하면 어떻게 해야 할까요? | S4 그럼 이번 주 토요일에 친구에게 같이 영화 보러 가자고 해볼까

     0.00s  user  발화 시작: 안녕하세요, 가로 씨. 요즘 친구 때문에 좀 힘든 일이 있었어요.
     4.38s  agent 발화 시작: 안녕하세요. 어떤 일 때문에 힘드신가요? 편하게 말씀해 주세요.
     4.38s  user  발화 끝
     7.88s  user  발화 시작: 음… 제가 먼저 연락을 잘 못 하거든요. 친구가 서운해하는 것 같아서요.
     7.88s  agent 발화 끝
    12.69s  agent 발화 시작: 먼저 연락하는 게 어려우시군요. 친구 관계에서 중요한 부분인데, 어떻게 하면 좋을지 함께 생각해 봐요.
    12.69s  user  발화 끝
    18.82s  user  발화 시작: 혹시, 제가 먼저 연락하는 게 더 중요할까요?
    18.82s  agent 발화 끝
    21.80s  <ret> 발화 (turn5 첫 프레임)
    21.89s  agent 발화 시작: <ret> 친구 관계를 잘 유지하려면, 가끔씩이라도 먼저 연락하는 게 중요하다고 해요. 꾸준히 연락하면 신뢰
    21.89s  user  발화 끝
    22.91s  ⚡SPAN 주입 [d'=1.11s / d_lead=7.44s]: Maintaining regular contact, even with simple check-ins, demonstrates 
    29.33s  user  발화 시작: 아, 그렇군요. 그럼 얼마나 자주 연락해야 할까요?
    29.33s  agent 발화 끝
    32.39s  agent 발화 시작: 너무 부담스럽지 않게, 일주일에 한두 번 정도는 어떨까요?
    32.39s  user  발화 끝
    35.89s  user  발화 시작: 일주일에 한두 번이면 괜찮을 것 같아요. 그런데 무슨 이야기를 해야 할지 고민이에요.
    35.89s  agent 발화 끝
    41.14s  agent 발화 시작: 네네.
    41.14s  user  발화 끝
    41.58s  agent 발화 시작: 특별한 일이 아니어도 괜찮아요. “요즘 어떻게 지내?” 같은 간단한 안부 인사도 좋고요.
    41.58s  agent 발화 끝
    46.83s  user  발화 시작: 음… 그럼 친구가 저에게 먼저 연락하면 어떻게 해야 할까요?
    46.83s  agent 발화 끝
    50.77s  agent 발화 시작: 맞아요.
    50.77s  user  발화 끝
    51.21s  agent 발화 시작: 친구가 먼저 연락해 준다면, 반갑게 답장하고 대화를 이어가면 돼요.
    51.21s  agent 발화 끝
    55.15s  user  발화 시작: 혹시 제가 친구에게 서운했던 점이 있다면 어떻게 말해야 할까요?
    55.15s  agent 발화 끝
    59.09s  agent 발화 시작: 솔직하게 말하되, 비난하는 말투는 피하는 게 좋아요. “네가 이렇게 해줬으면 좋겠어”처럼 자신의 감정을 표현
    59.09s  user  발화 끝
    66.09s  user  발화 시작: 맞아요.
    66.09s  agent 발화 끝
    66.53s  user  발화 시작: [sigh] 친구가 요즘 저를 잘 안 만나주는 것 같아요.
    66.53s  user  발화 끝
    70.35s  <ret> 발화 (turn18 첫 프레임)
    70.47s  agent 발화 시작: <ret> 친구분과의 관계 때문에 걱정이 많으시군요. 함께 시간을 보내는 게 친구 관계 만족도에 영향을 준다
    70.47s  user  발화 끝
    71.73s  ⚡SPAN 주입 [d'=1.38s / d_lead=2.19s]: Studies show that individuals who actively participate in shared activ
    80.98s  user  발화 시작: 네.
    80.98s  agent 발화 끝
    81.41s  user  발화 시작: 그럼 이번 주 토요일에 친구에게 같이 영화 보러 가자고 해볼까요?
    81.41s  user  발화 끝
    85.73s  <ret> 발화 (turn21 첫 프레임)
    85.79s  agent 발화 시작: <ret> 이번 주말에 '인사이드 아웃 이', '배드 보이 라이드 오어 다이', '가필드 무비'가 상영 중이
    85.79s  user  발화 끝
    87.12s  ⚡SPAN 주입 [d'=1.39s / d_lead=6.13s]: (tool result) Showing: 'Inside Out 2', 'Bad Boys: Ride or Die', 'The G
    91.92s  user  발화 시작: '인사이드 아웃 이'가 재미있을까요?
    91.92s  agent 발화 끝
    93.67s  agent 발화 시작: 네, 평점이 꽤 높게 나오고 있어요. 많은 분들이 재미있다고 하네요.
    93.67s  user  발화 끝
    98.05s  agent 발화 끝
