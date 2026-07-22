# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "준슬",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-06",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Vietnamese."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 25°C."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into board-game design."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 나 요즘 프리미어리그에 푹 빠졌어. | S2 앨런 시어러가 정말 대단하긴… | S3 여보, 오븐 타이머 울린다 — 좀 꺼 줄래? | S4 [curious] 이백육십골이라니 진짜 말도 안 되는 숫자다.

     0.00s  user  발화 시작: 나 요즘 프리미어리그에 푹 빠졌어.
     2.21s  user  발화 끝
     2.33s  agent 발화 시작: [happy] 축구는 정말 열정이 넘치는 스포츠죠. 어떤 팀을 응원하세요?
     3.77s  user  발화 시작: 응.
     4.21s  user  발화 끝
     6.49s  agent 발화 끝
     6.58s  user  발화 시작: 그냥 경기 보는 게 좋더라고. 근데 궁금한 게 있는데, 프리미어리그 역대 최다 득점자가 누구야?
    12.22s  <ret> 발화 (turn4 첫 프레임)
    12.32s  agent 발화 시작: <ret> 프리미어리그 역사상 가장 많은 골을 넣은 선수는 바로 앨런 시어러입니다.
    12.42s  user  발화 끝
    13.99s  ⚡SPAN 주입 [d'=1.77s / d_lead=4.99s]: Alan Shearer is the all-time leading goalscorer in the English Premier
    15.06s  user  발화 시작: 응.
    15.56s  user  발화 끝
    17.31s  agent 발화 끝
    17.69s  user  발화 시작: 앨런 시어러가 정말 대단하긴…
    19.67s  user  발화 끝
    20.72s  user  발화 시작: …했지. 요즘 선수들이랑 비교하면 어때?
    22.08s  agent 발화 시작: 음.
    22.57s  agent 발화 끝
    23.30s  user  발화 끝
    23.37s  agent 발화 시작: 시대마다 경기 방식이 달라서 단순 비교는 어렵지만, 그 시절의 압도적인 득점력은 정말 상징적이에요.
    30.59s  agent 발화 끝
    32.04s  user  발화 시작: 여보, 오븐 타이머 울린다 — 좀 꺼 줄래?
    34.89s  user  발화 시작: 아, 그리고 요즘은 득점 순위가 또 바뀌었을 것 같아.
    35.00s  user  발화 끝
    36.80s  <ret> 발화 (turn12 첫 프레임)
    37.29s  agent 발화 시작: <ret> 요즘 기록은 또 다를 수 있겠네요. 확인해 보니 여전히 앨런 시어러 선수가 이백육십골로 일위를 지
    37.48s  user  발화 끝
    37.63s  ⚡SPAN 주입 [d'=0.84s / d_lead=2.29s]: (tool result) Alan Shearer remains the all-time top scorer with 260 go
    39.87s  user  발화 시작: 응.
    40.36s  user  발화 끝
    45.60s  user  발화 시작: [curious] 이백육십골이라니 진짜 말도 안 되는 숫자다.
    45.68s  agent 발화 끝
    47.88s  agent 발화 시작: [laugh] 정말 경이로운 기록이죠. 이런 꾸준함과 집중력은 우리 삶에서도 배울 점이 많은 것 같아요.
    48.04s  user  발화 끝
    51.81s  user  발화 시작: 응.
    52.12s  user  발화 끝
    54.32s  agent 발화 끝
    54.81s  user  발화 시작: 그러게. 나도 내 일에서 그렇게 꾸준해지고 싶다.
    57.53s  user  발화 끝
    57.76s  agent 발화 시작: [happy] 그런 마음가짐 자체가 이미 시작하신 거예요. 천천히 하나씩 쌓아가시면 됩니다.
    62.62s  agent 발화 끝
