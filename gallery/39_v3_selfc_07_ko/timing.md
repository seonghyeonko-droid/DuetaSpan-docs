# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 네, 6월 15일에 그랜드뷰 로프트 보여주는 걸로 예약할게요.
     4.31s  <ret> 발화 (turn1 첫 프레임)
     4.47s  agent 발화 시작: <ret> 응, 6월 15일 오후 두 시에 보여주는 걸로 예약됐어.
     4.53s  user  발화 끝
     5.59s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.73s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     7.99s  agent 발화 끝
     8.07s  user  발화 시작: 정말 좋네요, 그런데— 그러니까, 좀 더 늦은 시간에 볼 수 있을까요?
    13.25s  user  발화 끝
    13.61s  agent 발화 시작: 그날 늦게도 괜찮아, 몇 시쯤 보고 싶어?
    16.08s  user  발화 시작: 가능하다면 6시쯤요.
    16.56s  agent 발화 끝
    17.79s  <ret> 발화 (turn5 첫 프레임)
    18.15s  user  발화 끝
    18.19s  agent 발화 시작: <ret> 6시에 가능한지 알아볼게. 응, 6월 15일 6시에 가능해. 예약 완료됐어.
    19.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    23.23s  agent 발화 끝
    24.24s  user  발화 시작: 정말 다행이네요. 그 동네는 어떤 곳이에요?
    27.14s  agent 발화 시작: 그랜드뷰 로프트는 부티크랑 카페로 유명한 역사 지구에 있어.
    27.15s  user  발화 끝
    31.76s  agent 발화 끝
    31.82s  user  발화 시작: 그렇지만 걸어 다닐 만한 곳인가요?
    34.15s  agent 발화 시작: 응, 당연히 그렇지—
    34.22s  user  발화 끝
    34.72s  user  발화 시작: 그러니까, 차 없이도 돌아다니기 괜찮은 곳이에요?
    35.39s  agent 발화 끝
    37.60s  agent 발화 시작: 걷기 아주 좋아, 100점 만점에 92점이야.
    37.73s  user  발화 끝
    39.10s  user  발화 시작: 네.
    39.83s  user  발화 끝
    41.01s  agent 발화 시작: 거기다 대중교통도 잘 되어 있어.
    41.02s  agent 발화 끝
    42.99s  agent 발화 끝
    44.10s  user  발화 시작: 그건 정말 좋은 소식이네요. 혹시 차가 있으면 주차는 어때요?
    48.71s  agent 발화 시작: 길가 주차는 좀 어렵지만, 로프트에서 두 블록 떨어진 곳에 주차장이 있어.
    48.77s  user  발화 끝
    54.63s  agent 발화 끝
    56.05s  user  발화 시작: 알겠습니다. 그럼 거기서 투 베드룸의 평균 월세는 얼마예요?
    60.09s  <ret> 발화 (turn17 첫 프레임)
    60.17s  agent 발화 시작: <ret> 잠깐만, 현재 월세를 알아볼게. 투 베드룸의 평균 월세는 월 2천8백50달러야.
    60.26s  user  발화 끝
    62.02s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.68s]: (tool result) The average rent for a two-bedroom at The Grandview Loft
    67.27s  agent 발화 끝
    67.27s  user  발화 시작: 생각보다 조금 비싸네요… 2천5백 달러 정도는 안 될까요?
    71.14s  <ret> 발화 (turn19 첫 프레임)
    71.38s  agent 발화 시작: <ret> 2천5백 달러 정도의 비슷한 매물을 찾아볼게. 엘름 스트리트 아파트, 오크우드 레지던스, 윌로우 
    71.44s  user  발화 끝
    72.26s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.28s]: (tool result) Three properties match your criteria: Elm Street Apartme
    81.29s  user  발화 시작: 오크우드 레지던스에 대해 더 자세히 알려주세요.
    81.35s  agent 발화 끝
    84.26s  <ret> 발화 (turn21 첫 프레임)
    84.42s  agent 발화 시작: <ret> 오크우드 레지던스에 대한 정보를 가져올게. 오크우드 레지던스는 원 베드룸과 투 베드룸 유닛이 있고
    84.53s  user  발화 끝
    84.76s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.79s]: (tool result) Oakwood Residences offers one and two-bedroom apartments
    94.06s  agent 발화 끝
    94.50s  user  발화 시작: 좋은 소식이네요. 그럼 다음 주에 거기 보여주는 걸로 예약할 수 있을까요?
    98.63s  agent 발화 시작: 당연하지. 다음 주에 언제 보는 게 제일 좋아?
    98.76s  user  발화 끝
   101.68s  agent 발화 끝
