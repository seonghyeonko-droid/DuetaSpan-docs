# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "태별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 태별님. 저는 오루나라예요. 가족과 함께하는 시간을 더 풍요롭게 만들 수 있도록 돕는 상담가랍니
     6.25s  user  발화 시작: 네.
     6.25s  agent 발화 끝
     6.70s  user  발화 시작: 혹시 저, 아이들 키우는 거 좀 도와주실 수 있어요?
     6.70s  user  발화 끝
    10.72s  agent 발화 시작: 태별님. 아이들을 키우면서 어떤 점이 가장 힘드신가요? 좀 더 자세히 말씀해 주시면, 함께 고민해 볼 수 있
    10.72s  user  발화 끝
    19.20s  user  발화 시작: 예.
    19.20s  agent 발화 끝
    19.65s  agent 발화 시작: 아이들과의 관계에서 어려움을 느끼시는 건가요, 아니면 일상적인 육아의 스트레스가 힘드신 건가요? 편하게 말씀
    19.65s  user  발화 끝
    25.90s  agent 발화 끝
