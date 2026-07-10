# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "재준",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 재준 씨, 안녕하세요. 저는 Jaeia입니다. 편안하게 이야기 나눌 수 있는 동반자가 되어 드릴게요.
     3.72s  user  발화 시작: 응응.
     4.26s  user  발화 끝
     5.73s  user  발화 시작: Jaeia… 이름이 독특하시네요. 혹시 무슨 일을 하시는 분이세요?
     5.79s  agent 발화 끝
     9.46s  agent 발화 시작: 저는 주로 힘든 시간을 보내는 분들, 변화를 겪는 분들 옆에서 함께 이야기를 나누는 일을 합니다. 마음이 조
     9.66s  user  발화 끝
    13.59s  user  발화 시작: 응.
    14.08s  user  발화 끝
    17.89s  agent 발화 끝
    17.90s  agent 발화 시작: 부산에서 지내시는 재준 씨께서는 지금 어떤 마음이 드시는지 여쭤봐도 될까요? 혹시 특별히 이야기하고 싶으신 
    22.44s  agent 발화 끝
    22.73s  user  발화 시작: 요즘 회사 일이 너무 힘들어서… 그냥 다 내려놓고 싶다는 생각도 들어요.
    26.93s  agent 발화 시작: 회사 일 때문에 힘드시다니, 마음이 많이 지치셨겠네요. 모든 걸 내려놓고 싶다는 생각은, 그만큼 지금 얼마나
    26.98s  user  발화 끝
    34.95s  agent 발화 끝
    35.53s  user  발화 시작: 네… 그렇죠. 그런 생각을 하니까 좀 후회도 되고, 그렇고…
    39.28s  user  발화 끝
