# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "혜민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 리아나 씨. 요즘 좀 힘든 시간을 보내고 있어요. | S2 그래도 막막하네요. 뭘 해야 할지 감이 안 와요. | S3 아, 그렇군요. | S4 아, 그렇군요. 고맙습니다.

     0.00s  user  발화 시작: 안녕하세요, 리아나 씨. 요즘 좀 힘든 시간을 보내고 있어요.
     4.53s  user  발화 끝
     4.63s  agent 발화 시작: 안녕하세요. 힘든 시간을 보내고 계신다니 마음이 아프네요. 어떤 점이 가장 힘드신가요?
     9.35s  agent 발화 끝
     9.41s  user  발화 시작: 음… 갑자기 회사를 그만두게 돼서 뭘 해야 할지 모르겠어요.
    14.12s  agent 발화 시작: 갑작스러운 변화는 누구에게나 혼란스러울 수 있어요. 새로운 시작을 앞두고 불안한 건 당연해요.
    14.12s  user  발화 끝
    18.05s  user  발화 시작: 응.
    18.50s  user  발화 끝
    19.48s  user  발화 시작: 그래도 막막하네요. 뭘 해야 할지 감이 안 와요.
    19.54s  agent 발화 끝
    22.48s  <ret> 발화 (turn6 첫 프레임)
    22.87s  agent 발화 시작: <ret> 밀러 씨의 부인은 새라 루이자 바렛이었는데, 천팔백이십일년에 뉴욕에서 태어났어요.
    22.88s  ⚡SPAN 주입 [d'=0.88s / d_lead=4.68s]: James Henry Miller's wife was named Sarah Louisa Barrett, and she was 
    23.09s  user  발화 끝
    25.54s  user  발화 시작: 응.
    25.89s  user  발화 끝
    27.55s  agent 발화 끝
    27.58s  user  발화 시작: 아, 그렇군요.
    28.91s  user  발화 끝
    28.92s  agent 발화 시작: 새로운 길을 찾는 과정에서 잠시 멈춰 서서 자신을 돌아보는 시간을 가져보는 건 어떠세요? 무엇을 좋아하고, 
    32.66s  user  발화 시작: 응.
    33.11s  user  발화 끝
    37.31s  agent 발화 끝
    37.38s  user  발화 시작: 그럴까요? 시간 내서 생각해 봐야겠네요.
    40.08s  <ret> 발화 (turn12 첫 프레임)
    40.28s  user  발화 끝
    40.31s  agent 발화 시작: <ret> 현재 서울의 날씨는 이십팔도이고, 습도는 육십오퍼센트, 바람은 시속 삼 점 이킬로미터로 불고 있어
    40.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: (tool result) Seoul, South Korea: 28.0°C, humidity 65%, wind 3.2 km/h
    46.76s  user  발화 시작: 아, 그렇군요. 고맙습니다.
    46.80s  agent 발화 끝
    48.69s  user  발화 끝
    48.84s  agent 발화 시작: 도움이 되었다니 다행이네요.
    50.45s  agent 발화 끝
