# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "다율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "allergy",
#       "text": "User is allergic to latex."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "dislike",
#       "text": "User can't stand bell peppers."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "partner",
#       "text": "User's partner is named Minjun."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-05-31",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-05-20",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-04-28",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 다율님. 저는 크라린이라고 해요. 관계와 연결에 어려움을 겪는 분들을 돕는 커리어 코치랍니다.
     6.46s  user  발화 시작: 대체 뭘 어떻게 도와주시는 건데요?
     6.46s  agent 발화 끝
     8.94s  agent 발화 시작: [happy] 혼자라는 느낌, 외로움… 그런 감정들이 커리어에도 영향을 줄 수 있거든요. 함께 이야기 나누면
     8.94s  user  발화 끝
    19.87s  user  발화 시작: 맞아요.
    19.87s  agent 발화 끝
    20.36s  agent 발화 시작: 예를 들어, 비슷한 관심사를 가진 사람들을 만날 수 있는 모임이나, 새로운 취미를 시작하는 방법을 함께 고민
    20.36s  user  발화 끝
    33.27s  user  발화 시작: 그렇죠.
    33.27s  agent 발화 끝
    33.77s  user  발화 시작: 요즘은 주변에 마음 터놓고 이야기할 사람이 없어서… 좀 힘든 것 같아요.
    33.77s  user  발화 끝
    39.23s  agent 발화 시작: [sigh] 그런 마음, 충분히 이해해요. 많은 분들이 비슷한 어려움을 겪으시거든요. 다율님은 어떤 분야에 
    39.23s  user  발화 끝
    51.15s  user  발화 시작: 글쎄요… 예전엔 뜨개질을 좋아했어요.
    51.15s  agent 발화 끝
    53.14s  agent 발화 시작: 뜨개질! 정말 멋지네요. 손으로 무언가를 만드는 건 마음을 안정시키고, 작은 성취감을 느끼게 해주죠. 혹시 
    53.14s  user  발화 끝
    70.03s  agent 발화 끝
