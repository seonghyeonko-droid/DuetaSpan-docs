# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 옛날 캘리포니아 광산에 대해 조사하고 있는데, 혹시 관련해서 아시는 게 있으신가요?
     5.86s  agent 발화 시작: 제가 빙하학자라서 광산 역사를 다루는 일은 흔하지 않지만, 아는 선에서 기꺼이 말씀드릴게요.
     5.97s  user  발화 끝
    12.67s  agent 발화 끝
    14.10s  user  발화 시작: 정말 다행이네요. 특히 수은 광산에 관심이 있는데, 아주 중요했던 곳이 있었나요?
    19.39s  <ret> 발화 (turn3 첫 프레임)
    19.99s  agent 발화 시작: <ret> 좋은 질문이세요. 레이크 카운티의 설퍼 뱅크 광산은 세계적으로 유명한 수은 생산지 중 하나가 되었
    20.17s  user  발화 끝
    20.35s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.24s]: The Sulphur Bank Mine in Lake County, California, became one of the mo
    27.77s  user  발화 시작: 아, 설퍼 뱅크요. 들어본 이름이에요. 언제 운영되었나요?
    27.83s  agent 발화 끝
    32.04s  <ret> 발화 (turn5 첫 프레임)
    32.12s  ⚡SPAN 주입 [d'=0.08s / d_lead=6.49s]: Sulphur Bank Mine operated from 1873 to 1883, producing over seventy-t
    32.63s  agent 발화 시작: <ret> 잠시 찾아볼게요. 설퍼 뱅크 광산은 천팔백칠십삼년부터 천팔백팔십삼년까지 운영되었어요.
    32.82s  user  발화 끝
    40.05s  agent 발화 끝
    41.21s  user  발화 시작: 칠만 이천 플라스크나 된다니… 정말 많네요! 그 수은은 주로 어디에 사용되었나요?
    47.14s  user  발화 끝
    47.18s  agent 발화 시작: 수은은 역사적으로 생각보다 다양한 용도로 사용되었는데, 주로 금과 은을 추출하는 데 사용되었어요.
    54.46s  user  발화 시작: 금 추출이군요. 유압 채굴과 수은에 대한 내용을 읽은 적이 있어요.
    54.50s  agent 발화 끝
    59.32s  user  발화 끝
    59.48s  agent 발화 시작: 유압 채굴은 광석에서 금을 분리하기 위해 수은에 크게 의존했어요. 매우 효과적인 방법이었지만, 환경에 해로운
    68.80s  agent 발화 끝
    68.86s  user  발화 시작: 어떻게 해로운가요?
    69.61s  <ret> 발화 (turn11 첫 프레임)
    70.03s  agent 발화 시작: <ret> 생태계에 심각한 영향을 미쳤어요. 광산에서 배출된 수은이 수로를 오염시키고 수생 생물에 해를 끼쳐
    70.23s  user  발화 끝
    70.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.14s]: Mercury released from hydraulic mining contaminated waterways and harm
    76.61s  user  발화 시작: 네.
    77.24s  user  발화 끝
    80.09s  agent 발화 끝
    80.12s  user  발화 시작: 그렇다면 설퍼 뱅크가 그 당시에 캘리포니아에서 유일하게 중요한 수은 광산이었나요?
    85.62s  agent 발화 시작: 아니요, 다른 곳도 있었지만, 설퍼 뱅크가 특히 생산량이 많았어요.
    85.82s  user  발화 끝
    90.32s  user  발화 시작: 설퍼 뱅크의 생산량과 비슷한 광산이 있었나요?
    90.35s  agent 발화 끝
    93.17s  <ret> 발화 (turn16 첫 프레임)
    93.76s  agent 발화 시작: <ret> 또 다른 광산이 있었는데, 캘리포니아에 있는 뉴 알마덴 광산도 설퍼 뱅크와 비슷한 수준의 수은을 
    93.92s  user  발화 끝
    94.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.20s]: The New Almaden mine, also in California, was another major mercury pr
   101.91s  user  발화 시작: 잠깐만요, 뉴 알마덴… 그 광산이 노동 분쟁과 관련이 있었던 것 같네요.
   102.01s  agent 발화 끝
   107.53s  agent 발화 시작: 네, 맞아요. 뉴 알마덴 광산은 복잡한 노동 문제의 역사를 가지고 있어요.
   107.79s  user  발화 끝
   112.78s  user  발화 시작: 그 분쟁에 대해 좀 더 자세히 말씀해 주시겠어요? 광부들은 무엇을 위해 싸웠나요?
   113.55s  agent 발화 끝
   118.66s  user  발화 끝
   118.70s  agent 발화 시작: 뉴 알마덴의 광부들은 위험한 작업 환경에 직면했고, 더 나은 임금과 안전한 작업 방식을 요구하며 싸웠어요. 
   128.07s  <ret> 발화 (turn21 첫 프레임)
   128.62s  agent 발화 끝
   128.67s  agent 발화 시작: <ret> 그 조건은 정말 열악했어요. 광부들은 유독한 수은 증기에 노출되어 건강 문제를 겪고 사망에 이르기
   129.07s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.66s]: Miners at New Almaden endured exposure to toxic mercury vapor, leading
   136.10s  user  발화 시작: 정말 끔찍하네요. 지금은 그런 문제가 해결되었다니 다행이에요.
   136.64s  agent 발화 끝
   140.85s  agent 발화 시작: 다행히도 그 이후로 규정과 안전 기준이 크게 개선되었어요. 힘든 과거에서 얻은 교훈이죠.
   141.00s  user  발화 끝
   147.85s  agent 발화 끝
