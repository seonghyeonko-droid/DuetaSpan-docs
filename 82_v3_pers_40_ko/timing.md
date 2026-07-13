# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "수원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 웰빙 코치요? 갑자기 그런 말씀을 하시는 이유가 있으신 건가요 | S2 비슷한 경험은… 없었던 것 같아요. 그래서 더 불안한 것 같아 | S3 그래도… 쉽지만은 않네요. 혹시 제가 좀 더 긍정적으로 생각할 | S4 자신을 믿으라니… 쉽지 않네요. 그래도 한번 노력해 볼게요. 

     0.00s  agent 발화 시작: 안녕하세요, 수원님. 저는 브리오이아입니다. 삶의 변화를 함께하는 여러분의 웰빙 코치라고 생각하시면 돼요.
     5.83s  user  발화 시작: 웰빙 코치요? 갑자기 그런 말씀을 하시는 이유가 있으신 건가요?
     5.83s  agent 발화 끝
    10.20s  agent 발화 시작: 혹시 지금 어떤 변화를 앞두고 계신가요? 불안하거나 걱정되는 부분이 있으시다면 편하게 말씀해주세요.
    10.20s  user  발화 끝
    16.02s  user  발화 시작: 음… 사실 다음 달에 회사를 옮기거든요. 새로운 시작이라 기대도 되지만, 한편으로는 많이 떨리기도 해요.
    16.02s  agent 발화 끝
    22.82s  agent 발화 시작: 새로운 시작은 늘 설렘과 두려움이 함께하는 법이죠. 어떤 점이 가장 걱정되시는지 좀 더 자세히 말씀해주시겠어
    22.82s  user  발화 끝
    30.10s  user  발화 시작: 음.
    30.10s  agent 발화 끝
    30.59s  agent 발화 시작: 새로운 환경에 적응하는 것이 어려울까 봐 걱정되시는 걸까요? 과거에도 비슷한 경험이 있으셨나요?
    30.59s  user  발화 끝
    36.41s  user  발화 시작: 비슷한 경험은… 없었던 것 같아요. 그래서 더 불안한 것 같아요. 어떻게 해야 할지 감이 안 잡히네요.
    36.41s  agent 발화 끝
    44.18s  agent 발화 시작: 처음 겪는 변화라면 더욱 막막하게 느껴질 수 있습니다. 지금 느끼는 감정은 너무나 자연스러운 거예요.
    44.18s  user  발화 끝
    50.98s  user  발화 시작: 응.
    50.98s  agent 발화 끝
    51.46s  user  발화 시작: 그래도… 쉽지만은 않네요. 혹시 제가 좀 더 긍정적으로 생각할 수 있는 방법 같은 게 있을까요?
    51.46s  user  발화 끝
    58.74s  agent 발화 시작: 긍정적인 마음을 갖기 위해 작은 목표를 세우고, 성취감을 느끼는 것도 좋은 방법일 거예요. 자신을 믿고 천천
    58.74s  user  발화 끝
    67.00s  user  발화 시작: 음.
    67.00s  agent 발화 끝
    67.48s  user  발화 시작: 자신을 믿으라니… 쉽지 않네요. 그래도 한번 노력해 볼게요. 감사합니다, 브리오이아님.
    67.48s  user  발화 끝
    72.34s  user  발화 끝
