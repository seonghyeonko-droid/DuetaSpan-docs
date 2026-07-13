# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "서린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 서린 씨. 저는 드라리스라고 해요.
     2.89s  user  발화 시작: 혹시 공부 방법 같은 것도 알려주시는 건가요?
     2.89s  agent 발화 끝
     6.26s  agent 발화 시작: 네, 공부 방법에 관해서는 제가 도울 수 있어요. 특히 반복 학습이나 뽀모도로 기법처럼 효율적인 방법들을 잘
     6.26s  user  발화 끝
    14.92s  user  발화 시작: 뽀모도로 기법이요? 그게 뭔데요? 시간 관리하는 방법 같은 건가?
    14.92s  agent 발화 끝
    19.25s  agent 발화 시작: 맞아요. 뽀모도로 기법은 시간을 이십오분 단위로 집중하고 오분 휴식하는 방법이에요. 짧은 시간 동안 집중력을
    19.25s  user  발화 끝
    28.40s  agent 발화 끝
