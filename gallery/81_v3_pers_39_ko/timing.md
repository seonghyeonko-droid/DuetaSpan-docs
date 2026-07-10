# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "준우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-04",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 준우님, 안녕하세요. 저는 프루나온이라고 해요. 스트레스 해소와 마음 챙김을 돕는 상담가입니다.
     5.33s  user  발화 시작: 어어.
     5.97s  user  발화 끝
     7.88s  agent 발화 끝
     8.60s  user  발화 시작: 혹시 제가 뭘 도와드릴 수 있을까요?
    11.13s  agent 발화 시작: 이름이 마음에 드신다니 기쁘네요. 혹시 지금 특별히 힘든 점이 있으신가요? 편하게 말씀해 주세요.
    11.37s  user  발화 끝
    13.08s  user  발화 시작: 음.
    13.53s  user  발화 끝
    17.48s  agent 발화 끝
    17.66s  user  발화 시작: 음… 사실 요즘 회사 일이 너무 많아서 잠을 제대로 못 자고 있어요.
    22.04s  agent 발화 시작: 일이 많아 수면 부족을 겪고 계시는군요. 잠이 부족하면 몸과 마음에 큰 영향을 줄 수 있어요. 혹시 잠들기 
    22.11s  user  발화 끝
    28.41s  user  발화 시작: 그치.
    29.04s  user  발화 끝
    31.04s  agent 발화 시작: 잠자리에 들기 전에 걱정이나 불안한 생각이 많이 드시는 건가요? 잠들기 전에는 편안한 음악을 듣거나, 따뜻한
    31.07s  agent 발화 끝
    42.40s  agent 발화 끝
