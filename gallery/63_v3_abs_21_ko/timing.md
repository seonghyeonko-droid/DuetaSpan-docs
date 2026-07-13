# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "현영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-03",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 라이프니츠 이론을 칭찬하는 이론은 무엇인가요? | S2 수면 시간… 제가 잠을 잘 못 자요. | S3 명상… 해본 적 없는데. | S4 아니요, 괜찮아요. 감사합니다.

     0.00s  user  발화 시작: 라이프니츠 이론을 칭찬하는 이론은 무엇인가요?
     1.93s  <ret> 발화 (turn1 첫 프레임)
     2.17s  agent 발화 시작: <ret> 죄송해요, 그 질문에 대한 정보는 찾을 수 없었어요. 아시는 대로, 모든 질문에 답을 드릴 수는 
     2.17s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.94s]: (no information found)
     2.17s  user  발화 끝
     9.10s  user  발화 시작: 음…
     9.10s  agent 발화 끝
     9.54s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 건강이나 습관에 대해 이야기해 볼까요?
     9.54s  user  발화 끝
    13.87s  user  발화 시작: 네네.
    13.87s  agent 발화 끝
    14.30s  agent 발화 시작: 규칙적인 생활 습관은 건강 유지에 정말 중요하죠. 특히 수면 시간을 일정하게 하는 것이 도움이 된답니다.
    14.30s  user  발화 끝
    20.81s  user  발화 시작: 수면 시간… 제가 잠을 잘 못 자요.
    20.81s  agent 발화 끝
    23.84s  agent 발화 시작: 잠을 잘 못 주무신다니 걱정이네요. 잠들기 전에 따뜻한 우유를 마시거나, 명상을 해보는 건 어떠세요?
    23.84s  user  발화 끝
    29.91s  user  발화 시작: 네.
    29.91s  agent 발화 끝
    30.34s  user  발화 시작: 명상… 해본 적 없는데.
    30.34s  user  발화 끝
    32.08s  agent 발화 시작: 명상은 마음을 편안하게 해주는 좋은 방법이에요. 처음에는 짧게 시작해서 점차 시간을 늘려보세요.
    32.08s  user  발화 끝
    37.28s  user  발화 시작: 예.
    37.28s  agent 발화 끝
    37.71s  user  발화 시작: 알겠습니다. 한번 시도해 볼게요.
    37.71s  user  발화 끝
    39.44s  agent 발화 시작: 잘 생각하셨어요. 작은 변화가 큰 결과를 가져올 수 있답니다. 혹시 명상 관련 앱을 추천해 드릴까요?
    39.44s  user  발화 끝
    45.95s  user  발화 시작: 네.
    45.95s  agent 발화 끝
    46.38s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
    46.38s  user  발화 끝
    47.68s  agent 발화 시작: 천만에요.
    47.68s  user  발화 끝
    48.11s  agent 발화 끝
