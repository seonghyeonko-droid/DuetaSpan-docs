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


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 재이아예요. 힘든 시간을 보내고 계신 분들이 변화를 받아들이고 슬픔을 극복하도
     6.14s  user  발화 시작: 응응.
     6.64s  user  발화 끝
     9.51s  user  발화 시작: 재이아… 이름이 예쁘네요. 근데 상담사라고 하셨죠? 제가 뭘 어떻게 받아들여야 할지, 솔직히 잘 모르겠어요.
     9.60s  agent 발화 끝
    15.95s  user  발화 끝
    16.07s  agent 발화 시작: 어떤 점이 가장 혼란스러우신가요? 때로는 감정을 명확히 표현하는 것만으로도 한결 나아질 수 있거든요. 지금 
    21.63s  user  발화 시작: 응.
    21.99s  user  발화 끝
    27.42s  agent 발화 시작: 슬픔은 마치 파도와 같아요. 밀려왔다 밀려가면서 때로는 강렬하게, 때로는 잔잔하게 우리 마음을 흔들죠. 그 
    27.47s  agent 발화 끝
    39.56s  user  발화 시작: 파도… 비유가 좋네요. 그런데 그 파도가 영영 가시지 않으면 어떡하죠?
    40.31s  agent 발화 끝
    43.89s  agent 발화 시작: 영원히 사라지지 않는다고 단정 짓기보다는, 그 파도의 형태가 변해갈 수 있다고 생각하면 어떨까요? 슬픔은 우
    43.91s  user  발화 끝
    56.46s  agent 발화 끝
    56.56s  user  발화 시작: 그럴까요… 그래도 무서워요. 변화가.
    59.42s  user  발화 끝
    59.70s  agent 발화 시작: 변화를 두려워하는 건 자연스러운 일이에요. 새로운 시작은 언제나 불안감을 동반하죠. 하지만 변화는 성장의 기
    72.78s  agent 발화 끝
