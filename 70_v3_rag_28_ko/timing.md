# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "수안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 별들이 주계열성에서 에너지를 만드는 방법이 궁금해요. | S2 와, 육억 톤이라니… 엄청나네요. | S3 흥미로운데요. 오늘 날씨는 어때요? | S4 …영화 볼 만한 거 있을까요?

     0.00s  user  발화 시작: 별들이 주계열성에서 에너지를 만드는 방법이 궁금해요.
     2.88s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> 별은 정말 신비로운 존재예요.
     3.20s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.13s]: Main sequence stars generate energy by converting hydrogen to helium i
     3.20s  user  발화 끝
     5.34s  agent 발화 시작: 주계열성 별은 핵융합이라는 과정을 통해 수소를 헬륨으로 변환하여 에너지를 만들어 냅니다.
     5.34s  agent 발화 끝
    11.21s  user  발화 시작: 음, 헬륨이요? 그게 무슨 뜻이에요?
    11.21s  agent 발화 끝
    13.79s  <ret> 발화 (turn4 첫 프레임)
    13.87s  agent 발화 시작: <ret> 헬륨은 아주 가벼운 기체인데, 별 안에서 수소가 헬륨으로 바뀌면서 엄청난 에너지가 나오는 거예요.
    13.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.94s]: Nuclear fusion is a reaction in which two or more atomic nuclei are co
    13.87s  user  발화 끝
    20.81s  agent 발화 시작: 핵융합은 두 개 이상의 원자핵이 결합하여 다른 원자핵과 아원자 입자를 형성하는 반응입니다.
    20.81s  agent 발화 끝
    27.21s  user  발화 시작: 네.
    27.21s  agent 발화 끝
    27.75s  agent 발화 시작: 별은 마치 거대한 에너지 공장과 같아요. 끊임없이 수소를 헬륨으로 바꾸면서 빛과 열을 내뿜는 거죠.
    27.75s  user  발화 끝
    35.22s  user  발화 시작: 그럼 태양도 같은 방식으로 에너지를 만들어요?
    35.22s  agent 발화 끝
    38.34s  <ret> 발화 (turn9 첫 프레임)
    38.42s  agent 발화 시작: <ret> 태양은 주계열성 별이고, 핵융합 반응을 통해 에너지를 얻는데, 매초 약 육억 톤의 수소를 헬륨으로
    38.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.00s]: The Sun is a main-sequence star and is powered by nuclear fusion react
    38.42s  user  발화 끝
    46.42s  user  발화 시작: 와, 육억 톤이라니… 엄청나네요.
    46.42s  agent 발화 끝
    48.56s  agent 발화 시작: 네, 그렇죠? 상상하기 어려울 정도로 많은 양이에요. 별의 에너지가 얼마나 큰지 짐작할 수 있겠죠?
    48.56s  user  발화 끝
    56.03s  user  발화 시작: 네네.
    56.03s  agent 발화 끝
    56.56s  user  발화 시작: 그런데 그 헬륨은 어디로 가요?
    56.56s  user  발화 끝
    58.83s  <ret> 발화 (turn14 첫 프레임)
    59.23s  agent 발화 시작: <ret> 헬륨은 별의 중심부에 쌓이게 돼요. 별이 수명을 다하면 헬륨을 이용해서 더 무거운 원소를 만들기도
    59.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.00s]: As a star ages, it begins to fuse helium into heavier elements like ca
    59.23s  user  발화 끝
    67.23s  agent 발화 시작: 별이 늙어감에 따라 중심부에서 헬륨을 탄소나 산소 같은 더 무거운 원소로 융합하기 시작합니다.
    67.23s  agent 발화 끝
    74.17s  user  발화 시작: 흥미로운데요. 오늘 날씨는 어때요?
    74.17s  agent 발화 끝
    76.22s  <ret> 발화 (turn17 첫 프레임)
    76.30s  agent 발화 시작: <ret> 지금 기온은 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 불고 있습니다.
    76.30s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.40s]: (tool result) Current conditions: 23.0°C, humidity 74%, wind 5.5 km/h.
    76.30s  user  발화 끝
    82.71s  user  발화 시작: 고마워요. 혹시 이번 주 토요일에…
    82.71s  agent 발화 끝
    85.37s  user  발화 시작: …영화 볼 만한 거 있을까요?
    85.37s  user  발화 끝
    87.64s  <ret> 발화 (turn20 첫 프레임)
    88.04s  agent 발화 시작: <ret> 칠월 십일일 토요일에 롯데시네마 서울에서 “인터스텔라”가 오후 일곱시와 아홉시 삼십분에 상영됩니다
    88.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.87s]: (tool result) “Interstellar” is playing at Lotte Cinema Seoul at 7:00 
    88.04s  user  발화 끝
    93.91s  user  발화 시작: 인터스텔라요? 좋아요. 예매해 주세요.
    93.91s  agent 발화 끝
    96.04s  agent 발화 시작: 예매를 도와드리겠습니다. 인터스텔라, 롯데시네마 서울, 칠월 십일일 토요일 오후 일곱시, 맞으신가요?
    96.04s  user  발화 끝
   101.91s  agent 발화 끝
