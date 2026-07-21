# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "주진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "partner",
#       "text": "User's partner is named Yuna."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "child",
#       "text": "User has a child named Hana, age 8."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "learning",
#       "text": "User is taking pottery classes."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 24°C."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "hobby",
#       "text": "User is into beekeeping."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-06-05",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-26",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 에루크스님, 이번 주말에 머리 스타일 좀 바꾸고 싶은데, 괜찮 | S2 에밀리 카터요? 그분 실력이 좋다고요? | S3 예약 번호는 잘 알아뒀어요. 그런데 혹시 그 미용실 찾아가는  | S4 …혹시 버스를 타면 얼마나 걸릴까요?

     0.00s  user  발화 시작: 에루크스님, 이번 주말에 머리 스타일 좀 바꾸고 싶은데, 괜찮은 미용실 예약 좀 부탁드릴까요?
     6.10s  agent 발화 시작: 어떤 스타일을 생각하고 계신가요?
     6.12s  user  발화 끝
     8.21s  agent 발화 끝
     8.44s  user  발화 시작: 음… 그냥 깔끔하게 다듬고, 앞머리 살짝 내리는 정도로요.
    11.45s  agent 발화 시작: 아.
    11.90s  agent 발화 끝
    12.75s  <ret> 발화 (turn4 첫 프레임)
    13.21s  agent 발화 시작: <ret> 스타일은 정해주셨으니, 이제 디자이너를 정해야겠네요. 네, 근처 미용실에서 에밀리 카터 디자이너가
    13.37s  user  발화 끝
    14.17s  ⚡SPAN 주입 [d'=1.42s / d_lead=3.15s]: Services_1_FindProvider({"service_type": "haircut"})
    21.06s  user  발화 시작: 에밀리 카터요? 그분 실력이 좋다고요?
    21.41s  agent 발화 끝
    23.64s  user  발화 끝
    23.89s  agent 발화 시작: 네, 고객 만족도가 높은 디자이너입니다. 예약 가능 시간도 확인해 볼까요?
    29.36s  agent 발화 끝
    30.58s  user  발화 시작: 그럼 삼월 십일 오후 다섯시 십오분으로 예약해 주세요.
    33.64s  <ret> 발화 (turn8 첫 프레임)
    34.13s  user  발화 끝
    34.17s  agent 발화 시작: <ret> 네, 에밀리 카터 디자이너, 이천이십사년 삼월 십일 오후 다섯시 십오분으로 예약 완료되었습니다. 
    34.88s  ⚡SPAN 주입 [d'=1.25s / d_lead=10.89s]: (tool result) Emily Carter, 2024-03-10, 17:15, SER1-005611, confirmed
    45.06s  agent 발화 끝
    45.56s  user  발화 시작: 예약 번호는 잘 알아뒀어요. 그런데 혹시 그 미용실 찾아가는 길도 알려주실 수 있을까요? 지금 제가 광화문인
    49.10s  agent 발화 시작: 예.
    49.64s  agent 발화 끝
    55.06s  <ret> 발화 (turn11 첫 프레임)
    55.30s  agent 발화 시작: <ret> 광화문에서 출발하면 약 오 점 칠킬로미터, 도보로 칠십육분 정도 걸립니다.
    55.35s  user  발화 끝
    55.97s  ⚡SPAN 주입 [d'=0.91s / d_lead=5.59s]: (tool result) 5.7 km, 76 min by walking
    60.60s  user  발화 시작: 칠십육분이면 좀 멀긴 하네요—
    60.89s  agent 발화 끝
    62.81s  user  발화 끝
    62.93s  user  발화 시작: …혹시 버스를 타면 얼마나 걸릴까요?
    64.93s  <ret> 발화 (turn14 첫 프레임)
    65.08s  agent 발화 시작: <ret> 백일번 버스를 타면 이십분 정도 걸리고, 요금은 이천오백원입니다.
    65.22s  user  발화 끝
    66.60s  ⚡SPAN 주입 [d'=1.67s / d_lead=4.94s]: (tool result) Bus 101, 20 min, ₩2,500
    70.02s  agent 발화 끝
    70.77s  user  발화 시작: 아, 버스를 타는 게 훨씬 좋겠네요. 감사합니다, 에루크스님.
    75.42s  user  발화 끝
