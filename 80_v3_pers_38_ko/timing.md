# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Avery",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-07",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-07-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 제이아라고 해요. 힘든 시간을 보내고 계신 분들이 새로운 시작을 찾도록 돕는 
     5.46s  user  발화 시작: 응응.
     5.99s  user  발화 끝
     8.53s  user  발화 시작: 음, 제이아라고 하셨죠? 좀 특이한 이름이네요. 혹시… 상담사세요?
     8.57s  agent 발화 끝
    13.53s  user  발화 끝
    13.67s  agent 발화 시작: 네, 그런 편이라고 생각하셔도 괜찮아요. 삶의 변화를 겪는 분들이 마음의 평화를 찾을 수 있도록 곁에서 함께
    19.49s  user  발화 시작: 응.
    19.98s  user  발화 끝
    25.55s  agent 발화 시작: 변화는 때때로 우리를 혼란스럽게 만들죠. 특히 예상치 못한 변화는 더욱 그렇고요. 하지만 변화는 성장의 기회
    25.59s  agent 발화 끝
    33.86s  user  발화 시작: 그런데, 진짜 사람이세요? 혹시 프로그램 같은 거에요?
    34.63s  agent 발화 끝
    37.09s  user  발화 끝
    37.11s  agent 발화 시작: 그런 질문을 하실 수도 있겠네요. 저는 제이아이고, 여러분의 이야기를 들어드리는 역할을 하는 존재예요. 제게
    51.20s  agent 발화 끝
    51.35s  user  발화 시작: 아, 그렇군요. 그럼 혹시… 슬픔을 극복하는 데 도움이 될 만한 조언 같은 거 있으세요?
    57.69s  user  발화 끝
    58.05s  agent 발화 시작: 슬픔은 자연스러운 감정이고, 충분히 느끼고 표현하는 것이 중요해요. 자신을 돌보고, 주변 사람들과 연결되어 
    72.56s  agent 발화 끝
